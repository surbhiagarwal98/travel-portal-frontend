import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Ticket } from './ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  originalTicket : Ticket
  constructor(private http:HttpClient) { }

  viewTickets(): Observable<Ticket[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    });

    return this.http.get<Ticket[]>('http://localhost:8080/users/tickets', {headers: headers}  );
  }

  setTicket(ticket){
    this.originalTicket = ticket;
  }
  getTicket(){
    return this.originalTicket;
  }

  updateTicket(ticket){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      });
  
      return this.http.put('http://localhost:8080/users/tickets', ticket,{headers: headers}  );
    }

    submitTicket(ticket){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      });
  
      return this.http.post('http://localhost:8080/users/tickets', ticket,{headers: headers}  );
    }

    getAllTickets():Observable<Ticket[]>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      });
  
      return this.http.get<Ticket[]>('http://localhost:8080/admin/tickets', {headers: headers}  );
    }

    updateStatus(ticket){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      });
  
      return this.http.put('http://localhost:8080/admin/ticketStatus', ticket,{headers: headers}  );
    }
    }

    
  

  

  
  


