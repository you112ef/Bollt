/**
 * 🚀 Terminal Enhancement Utilities for bolt.diy
 * تحسينات الطرفية المدمجة
 */

import React from 'react';

// Enhanced terminal configuration
export const ENHANCED_TERMINAL_CONFIG = {
  fontSize: 13,
  fontFamily: 'JetBrains Mono, SF Mono, Monaco, Inconsolata, "Roboto Mono", Consolas, "Droid Sans Mono", monospace',
  lineHeight: 1.4,
  letterSpacing: 0,
  scrollback: 10000,
  fastScrollModifier: 'alt' as const,
  fastScrollSensitivity: 5,
  smoothScrollDuration: 150,
  allowProposedApi: true,
  rightClickSelectsWord: true,
  wordSeparator: ' ()[]{}",\'`',
};

// Terminal theme enhancements
export const getEnhancedTerminalTheme = (overrides: any = {}) => ({
  background: 'var(--bolt-elements-terminals-background)',
  foreground: 'var(--bolt-terminal-foreground)',
  cursor: overrides.cursor || 'var(--bolt-terminal-foreground)',
  cursorAccent: 'var(--bolt-terminal-foreground)',
  selection: 'var(--bolt-terminal-selection-background)',
  black: 'var(--bolt-terminal-black)',
  red: 'var(--bolt-terminal-red)',
  green: 'var(--bolt-terminal-green)',
  yellow: 'var(--bolt-terminal-yellow)',
  blue: '#0EA5E9', // Updated to sky blue theme
  magenta: 'var(--bolt-terminal-magenta)',
  cyan: '#38BDF8', // Updated to sky blue theme
  white: 'var(--bolt-terminal-white)',
  brightBlack: 'var(--bolt-terminal-brightBlack)',
  brightRed: 'var(--bolt-terminal-brightRed)',
  brightGreen: 'var(--bolt-terminal-brightGreen)',
  brightYellow: 'var(--bolt-terminal-brightYellow)',
  brightBlue: '#0284C7', // Updated to sky blue theme
  brightMagenta: 'var(--bolt-terminal-brightMagenta)',
  brightCyan: '#0EA5E9', // Updated to sky blue theme
  brightWhite: 'var(--bolt-terminal-brightWhite)',
  ...overrides,
});

// Terminal performance optimizations
export const applyTerminalOptimizations = (terminal: any) => {
  // Enable GPU acceleration
  if (terminal.element) {
    terminal.element.style.willChange = 'transform';
    terminal.element.style.transform = 'translateZ(0)';
  }
  
  // Optimize scrolling
  terminal.options.fastScrollModifier = 'alt';
  terminal.options.fastScrollSensitivity = 5;
  terminal.options.smoothScrollDuration = 150;
  
  // Memory management
  terminal.options.scrollback = 10000;
  
  return terminal;
};

// Command history management
export class CommandHistory {
  private history: string[] = [];
  private index: number = -1;
  private maxSize: number = 100;
  
  add(command: string) {
    if (command.trim() && command !== this.history[0]) {
      this.history.unshift(command.trim());
      if (this.history.length > this.maxSize) {
        this.history = this.history.slice(0, this.maxSize);
      }
    }
    this.index = -1;
  }
  
  getPrevious(): string | null {
    if (this.index < this.history.length - 1) {
      this.index++;
      return this.history[this.index];
    }
    return null;
  }
  
  getNext(): string | null {
    if (this.index > -1) {
      this.index--;
      return this.index >= 0 ? this.history[this.index] : '';
    }
    return null;
  }
  
  clear() {
    this.history = [];
    this.index = -1;
  }
}