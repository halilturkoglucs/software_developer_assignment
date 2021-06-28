import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {

  @Input() message: string | undefined;
  @Output('close') closeEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeEvent.emit();
  }

}
