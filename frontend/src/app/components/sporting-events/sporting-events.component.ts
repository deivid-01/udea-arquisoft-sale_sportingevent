import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { SportingEvent } from 'src/app/models/sporting-events.model';
import { SportingEventsService} from '../../services/sporting-events.service'
interface DataItem {
  name: string;
  sport: string;
  city: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn | null;
}


@Component({
  selector: 'app-sporting-events',
  templateUrl: './sporting-events.component.html',
  styleUrls: ['./sporting-events.component.css']
})
export class SportingEventsComponent  {

  constructor(private sportingEventService: SportingEventsService)
  {

  }
  
  
  listOfColumns: ColumnItem[] = [
    {
      name: 'Event',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Sport',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'City',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (city: string, item: DataItem) => item.city.indexOf(city) !== -1
    }
  ];
  listOfData: DataItem[] = [
    {
      name: ' Event1',
      sport: 'Basketball',
      city: 'New York '
    },
    {
      name: ' Event2',
      sport: 'Soccer',
      city: 'London '
    },
    {
      name: ' Event3',
      sport: 'Tennis',
      city: 'Sidney '
    }
  ];

  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }

  sortByAge(): void {
    this.listOfColumns.forEach(item => {
      if (item.name === 'Sport') {
        item.sortOrder = 'descend';
      } else {
        item.sortOrder = null;
      }
    });
  }

  resetFilters(): void {
    this.listOfColumns.forEach(item => {
      if (item.name === 'Name') {
        item.listOfFilter = [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' }
        ];
      } else if (item.name === 'City') {
        item.listOfFilter = [
          { text: 'London', value: 'London' },
          { text: 'Sidney', value: 'Sidney' }
        ];
      }
    });
  }

  resetSortAndFilters(): void {
    this.listOfColumns.forEach(item => {
      item.sortOrder = null;
    });
    this.resetFilters();
  }

  ngOnInit():void{
    console.log("oliwisx22")

    this.sportingEventService.getSportingEvents()
    .subscribe(res=>{
      this.sportingEventService.sportingEvents = res as SportingEvent[]
    
    })

  }

}
