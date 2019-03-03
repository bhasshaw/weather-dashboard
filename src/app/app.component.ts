import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Constants } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	data: any;
	currentConditionMap: any;
	states = {
		'LOADING': 0,
		'ERROR': 1,
		'READY': 2,
	}
	currentState: number
	errorMessage: any;

	constructor(private http: HttpClient) {
		this.currentState = this.states.LOADING;
		this.currentConditionMap = {};
	}

	ngOnInit(){
		let sub = this.http.get(`http://api-c.pogoturfpro.com/weather/data/development?name=${Constants.name}&email=${Constants.email}`, {});
		sub.subscribe( (response) => {
			this.data = response;
			this.data.current.map(x => this.currentConditionMap[x.channel_name] = x );

			console.log(this.data)
			console.log(this.currentConditionMap)
			
			this.currentState = this.states.READY;
		}, (error) => {
			this.currentState = this.states.ERROR;
			this.errorMessage = error.error.message;
		});
	}
}
