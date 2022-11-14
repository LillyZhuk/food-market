import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../../../auth/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn = false;

  constructor(
    private _modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openLogin() {
    const modalRef = this._modalService.open(LoginComponent, {
      centered: true,
      windowClass: 'primary',
    });
  }
}
