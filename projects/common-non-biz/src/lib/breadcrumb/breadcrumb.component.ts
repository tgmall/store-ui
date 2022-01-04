import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbItem } from './breadcrumb.item';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'ui-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent implements OnInit {
  constructor(public service: BreadcrumbService, private router: Router, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.service.changes.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  isLink(item: BreadcrumbItem): boolean {
    return !!item.url && item.url !== this.router.url;
  }
}
