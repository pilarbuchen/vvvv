import { useMemo } from 'react';
import { useLocation, useMatches } from '@remix-run/react';
import { BreadcrumbData, RouteMatch } from './types';

export function useBreadcrumbs(): BreadcrumbData[] {
    const matches = useMatches() as RouteMatch[];
    const location = useLocation();

    return useMemo(
        () => matches.flatMap((match) => match.handle?.breadcrumbs?.(match, location) ?? []),
        [matches, location],
    );
}
