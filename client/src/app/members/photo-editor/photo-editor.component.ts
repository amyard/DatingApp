import {Component, Input, OnInit} from '@angular/core';
import {Member} from "../../models/member";

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  /* @Input() member: Member; - will receive correct member from <app-photo-editor [member]="member"></app-photo-editor>  */
  @Input() member: Member;

  constructor() { }

  ngOnInit(): void {
  }

}
