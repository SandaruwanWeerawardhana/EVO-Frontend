import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';


interface Event {
  title: string;
  description: string;
  startTime: string;  
  endTime: string;   
  imageUrl: string;
  status: string;
}

@Component({
  selector: 'app-upcomming-event',
  standalone: true,
  imports: [NgFor, NgIf,NgStyle],
  templateUrl: './upcomming-event.component.html',
  styleUrls: ['./upcomming-event.component.css']
})
export class UpcommingEventComponent {
  
  events: Event[] = [
        { title: 'Music Festival', description: 'Live music with amazing artists!', startTime: '10:40', endTime: '11:50', imageUrl: '', status: 'Active' },
        { title: 'Tech Conference', description: 'Innovations and networking.', startTime: '12:00', endTime: '15:00', imageUrl: 'https://images.stockcake.com/public/2/9/2/292f8e62-8891-41bb-9d82-cf81027244bf_large/tech-conference-speech-stockcake.jpg', status: 'Not-Active' },
        { title: 'Food Festival', description: 'Enjoy delicious dishes!', startTime: '14:30', endTime: '17:00', imageUrl: 'https://www.famousfoodfestival.com/wp-content/uploads/2016/12/famous-food-festival-about.jpg', status: 'Active' },
        { title: 'Art Exhibition', description: 'Discover amazing artworks.', startTime: '16:00', endTime: '18:00', imageUrl: 'https://images.stockcake.com/public/2/3/9/2397d77f-af92-4b51-8bb9-d60d138cf4d0_large/vibrant-art-exhibition-stockcake.jpg', status: 'Pending' },
        { title: 'Business Summit', description: 'Meet industry leaders.', startTime: '15:00', endTime: '16:00', imageUrl: 'https://www.shutterstock.com/image-photo/round-table-discussion-business-conference-600nw-2315079225.jpg', status: 'Not-Active' },
        { title: 'Sports Event', description: 'Exciting sports matches!', startTime: '18:30', endTime: '21:00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVek__EoMBo86bSKmd2dak8ODPJ8JWG_c6uw&s', status: 'Active' },
        { title: 'Gaming Expo', description: 'New games and tech showcase.', startTime: '14:00', endTime: '18:00', imageUrl: 'https://us.v-cdn.net/6036147/uploads/I68KDAH8MDYQ/10-must-attend-gaming-conventions-in-2024.jpg', status: 'Not-Active' },
        { title: 'Film Premiere', description: 'Exclusive movie screening.', startTime: '20:00', endTime: '23:00', imageUrl: 'https://www.cornucopia-events.co.uk/wp-content/uploads/2025/02/SKYFALL_LP41.jpg', status: 'Pending' }
  ];

  ongoingEvent: Event | null = null;
  upcomingEvents: Event[] = [];

  ngOnInit() {
    this.updateEvents();
    setInterval(() => {
      this.updateEvents();
    }, 60000); 
  }

 
  updateEvents() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();


    this.ongoingEvent = this.events.find(event => {
      const [startHour, startMinute] = event.startTime.split(':').map(Number);
      const [endHour, endMinute] = event.endTime.split(':').map(Number);

      return (
        (startHour < currentHour || (startHour === currentHour && startMinute <= currentMinute)) &&
        (endHour > currentHour || (endHour === currentHour && endMinute > currentMinute))
      );
    }) || null;

 
    this.upcomingEvents = this.events
      .filter(event => {
        const [startHour, startMinute] = event.startTime.split(':').map(Number);
        return startHour > currentHour || (startHour === currentHour && startMinute > currentMinute);
      })
      .sort((a, b) => {
        const [aHour, aMinute] = a.startTime.split(':').map(Number);
        const [bHour, bMinute] = b.startTime.split(':').map(Number);
        return aHour === bHour ? aMinute - bMinute : aHour - bHour;
      });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Active':
        return '#3D3BF3';
      case 'Not-Active':
        return 'red';
      case 'Pending':
        return 'yellow';
      default:
        return 'gray';
    }
  }
}
