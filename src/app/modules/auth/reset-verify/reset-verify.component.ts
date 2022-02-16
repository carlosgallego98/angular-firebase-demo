import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './reset-verify.component.html',
  styleUrls: ['./reset-verify.component.scss']
})
export class ResetVerifyComponent implements OnInit {
  public mode!: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mode = this.activatedRoute.snapshot.queryParams['mode'];
  }

}
