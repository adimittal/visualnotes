import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

interface Note {
  timestamp: number;
  frequency: number;
  note: string;
}

@Component({
  selector: 'app-visualnotes',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './visualnotes.component.html',
  styleUrls: ['./visualnotes.component.scss']
})
export class VisualNotesComponent implements OnInit {
  notes: Note[] = [];

  noteMappings: { [key: string]: string } = {
    'S': 'सा',
    'R': 'रे',
    'G': 'ग',
    'M': 'म',
    'M*': 'तीव्र म',
    'P': 'प',
    'D': 'ध',
    'N': 'नी',
    's': 'सा (कोमल)',
    'r': 'रे (कोमल)',
    'g': 'ग (कोमल)',
    'm': 'म (कोमल)',
    'd': 'ध (कोमल)',
    'n': 'नी (कोमल)'
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadNotesData();
  }

  loadNotesData(): void {
    this.http.get('/notes-data.txt', { responseType: 'text' })
      .subscribe(data => {
        this.parseData(data);
      });
  }

  parseData(data: string): void {
    const lines = data.split('\n');
    for (const line of lines) {
      const [timestamp, frequency, note] = line.trim().split(' ');
      if (timestamp && frequency && note) {
        this.notes.push({
          timestamp: parseFloat(timestamp),
          frequency: parseFloat(frequency),
          note: this.noteMappings[note] || note
        });
      }
    }
  }
}
