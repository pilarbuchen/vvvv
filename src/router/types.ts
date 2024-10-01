import type { UIMatch, Location } from '@remix-run/react';

export interface BreadcrumbData {
    title: string;
    to: string;
    /**
     * If true, renders the breadcrumb link and the separator icon only on the client side.
     * Useful when the breadcrumb is displayed based on the client-side data, e.g. browser history.
     */
    clientOnly?: boolean;
}

export type RouteHandle<Data = unknown, LocationState = unknown> =
    | {
          breadcrumbs?: (
              match: RouteMatch<Data>,
              location: Location<LocationState>,
          ) => BreadcrumbData[];
      }
    | undefined;

export type RouteMatch<Data = unknown> = UIMatch<Data, RouteHandle<Data>>;
