/**
 * 🚀 Enhanced Terminal Component for bolt.diy
 * مكون طرفية محسن بميزات متقدمة
 */

import { FitAddon } from '@xterm/addon-fit';
import { WebLinksAddon } from '@xterm/addon-web-links';
import { Terminal as XTerm } from '@xterm/xterm';
import { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState, useCallback } from 'react';
import type { Theme } from '~/lib/stores/theme';
import { createScopedLogger } from '~/utils/logger';
import { getTerminalTheme } from './theme';

const logger = createScopedLogger('EnhancedTerminal');

export interface EnhancedTerminalRef {
  reloadStyles: () => void;
  clear: () => void;
  focus: () => void;
  getSelection: () => string;
}

export interface EnhancedTerminalProps {
  className?: string;
  theme: Theme;
  readonly?: boolean;
  id: string;
  onTerminalReady?: (terminal: XTerm) => void;
  onTerminalResize?: (cols: number, rows: number) => void;
  onCommand?: (command: string) => void;
  placeholder?: string;
}

export const EnhancedTerminal = memo(
  forwardRef<EnhancedTerminalRef, EnhancedTerminalProps>(
    ({ 
      className, 
      theme, 
      readonly = false, 
      id, 
      onTerminalReady, 
      onTerminalResize,
      onCommand,
      placeholder = "Type your command..."
    }, ref) => {
      const terminalElementRef = useRef<HTMLDivElement>(null);
      const terminalRef = useRef<XTerm>();
      const [isReady, setIsReady] = useState(false);
      const commandHistoryRef = useRef<string[]>([]);
      const historyIndexRef = useRef(-1);
      
      const handleCommand = useCallback((command: string) => {
        if (command.trim()) {
          commandHistoryRef.current.unshift(command.trim());
          // الاحتفاظ بآخر 100 أمر فقط
          if (commandHistoryRef.current.length > 100) {
            commandHistoryRef.current = commandHistoryRef.current.slice(0, 100);
          }
          onCommand?.(command);
        }
        historyIndexRef.current = -1;
      }, [onCommand]);
      
      useEffect(() => {
        const element = terminalElementRef.current!;
        
        const fitAddon = new FitAddon();
        const webLinksAddon = new WebLinksAddon();
        
        const terminal = new XTerm({
          cursorBlink: true,
          convertEol: true,
          disableStdin: readonly,
          theme: getTerminalTheme(readonly ? { cursor: '#00000000' } : {}),
          fontSize: 13,
          fontFamily: 'JetBrains Mono, SF Mono, Monaco, Inconsolata, "Roboto Mono", Consolas, "Droid Sans Mono", monospace',
          lineHeight: 1.4,
          letterSpacing: 0,
          scrollback: 10000,
          fastScrollModifier: 'alt',
          fastScrollSensitivity: 5,
          smoothScrollDuration: 150,
          allowProposedApi: true,
          rightClickSelectsWord: true,
          wordSeparator: ' ()[]{}",\'`',
        });
        
        terminalRef.current = terminal;
        
        // إضافة معالج للأوامر
        let currentLine = '';
        terminal.onData((data) => {
          if (readonly) return;
          
          const code = data.charCodeAt(0);
          
          if (code === 13) { // Enter
            handleCommand(currentLine);
            currentLine = '';
          } else if (code === 127) { // Backspace
            if (currentLine.length > 0) {
              currentLine = currentLine.slice(0, -1);
            }
          } else if (code === 27) { // Escape sequences (Arrow keys)
            const sequence = data.slice(1);
            if (sequence === '[A') { // Up arrow
              if (commandHistoryRef.current.length > 0) {
                historyIndexRef.current = Math.min(
                  historyIndexRef.current + 1,
                  commandHistoryRef.current.length - 1
                );
                currentLine = commandHistoryRef.current[historyIndexRef.current] || '';
                terminal.write('\r\x1b[K' + currentLine);
              }
            } else if (sequence === '[B') { // Down arrow
              if (historyIndexRef.current > -1) {
                historyIndexRef.current = Math.max(historyIndexRef.current - 1, -1);
                currentLine = historyIndexRef.current >= 0 
                  ? commandHistoryRef.current[historyIndexRef.current] 
                  : '';
                terminal.write('\r\x1b[K' + currentLine);
              }
            }
          } else if (code >= 32) { // Printable characters
            currentLine += data;
          }
        });
        
        terminal.loadAddon(fitAddon);
        terminal.loadAddon(webLinksAddon);
        terminal.open(element);
        
        // تحسين الأداء مع ResizeObserver
        let resizeTimeout: NodeJS.Timeout;
        const resizeObserver = new ResizeObserver(() => {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            fitAddon.fit();
            onTerminalResize?.(terminal.cols, terminal.rows);
          }, 100);
        });
        
        resizeObserver.observe(element);
        
        // إضافة placeholder
        if (placeholder && !readonly) {
          terminal.write(`\x1b[90m${placeholder}\x1b[0m\r\n`);
        }
        
        logger.debug(`Enhanced Terminal attached [${id}]`);
        setIsReady(true);
        onTerminalReady?.(terminal);
        
        return () => {
          clearTimeout(resizeTimeout);
          resizeObserver.disconnect();
          terminal.dispose();
        };
      }, []);
      
      useEffect(() => {
        const terminal = terminalRef.current!;
        
        if (terminal) {
          terminal.options.theme = getTerminalTheme(readonly ? { cursor: '#00000000' } : {});
          terminal.options.disableStdin = readonly;
        }
      }, [theme, readonly]);
      
      useImperativeHandle(ref, () => {
        return {
          reloadStyles: () => {
            const terminal = terminalRef.current!;
            terminal.options.theme = getTerminalTheme(readonly ? { cursor: '#00000000' } : {});
          },
          clear: () => {
            const terminal = terminalRef.current!;
            terminal.clear();
          },
          focus: () => {
            const terminal = terminalRef.current!;
            terminal.focus();
          },
          getSelection: () => {
            const terminal = terminalRef.current!;
            return terminal.getSelection();
          },
        };
      }, [readonly]);
      
      return (
        <div 
          className={classNames(
            'relative h-full w-full',
            'transition-opacity duration-200',
            isReady ? 'opacity-100' : 'opacity-0',
            className
          )} 
          ref={terminalElementRef} 
        />
      );
    },
  ),
);

EnhancedTerminal.displayName = 'EnhancedTerminal';