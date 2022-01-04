export interface BreadcrumbItem {
  get title(): string;

  get url(): string | undefined | null;
}
