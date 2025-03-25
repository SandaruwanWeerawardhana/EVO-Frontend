import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Event {
  title: string;
  description: string;
  time: string; // Use HH:MM format
  imageUrl: string;
}


@Component({
  selector: 'app-upcomming-event',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './upcomming-event.component.html',
  styleUrl: './upcomming-event.component.css'
})
export class UpcommingEventComponent {

  events: Event[] = [
    {
      title: 'Music Festival',
      description: 'Live music with amazing artists!',
      time: '16:33',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EBGwzlILYoKG8k0mDAQOC-EebqlscsRcFA&s'
    },
    {
      title: 'Tech Conference 1',
      description: 'Discussing the latest trends in technology.',
      time: '18:30',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNGYAZ0q1Jy_8OSS8v3j3mZFZO5NjGhWAuQ&s'
    },
    {
      title: 'Tech Conference 2',
      description: 'Discussing the latest trends in technology.',
      time: '17:30',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Jrx3OhMC5rx0h0lvJ2YvYm4j5jZMvd4k8Q&s'
    },
    {
      title: 'Tech Conference 3',
      description: 'Discussing the latest trends in technology.',
      time: '19:30',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNGYAZ0q1Jy_8OSS8v3j3mZFZO5NjGhWAuQ&s'
    },
    {
      title: 'Tech Conference 4',
      description: 'Discussing the latest trends in technology.',
      time: '20:30',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNGYAZ0q1Jy_8OSS8v3j3mZFZO5NjGhWAuQ&s'
    }
  ];




  ongoingEvent: Event | null = null;
  upcomingEvents: Event[] = [];

  ngOnInit() {
    this.checkOngoingEvent();
    setInterval(() => {
      this.checkOngoingEvent();
    }, 60000); // Check every minute
  }

  checkOngoingEvent() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    this.ongoingEvent = this.events.find(event => {
      const [eventHour, eventMinute] = event.time.split(':').map(Number);
      return eventHour === currentHour && eventMinute <= currentMinute;
    }) || null;

    this.upcomingEvents = this.events.filter(event => {
      const [eventHour, eventMinute] = event.time.split(':').map(Number);
      return eventHour > currentHour || (eventHour === currentHour && eventMinute > currentMinute);
    });
  }


}
