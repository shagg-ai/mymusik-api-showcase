/* tslint:disable */
/* eslint-disable */

import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable, Subject, mergeMap, of, throwError } from 'rxjs';
import { ApiConfiguration } from './api-configuration';
import { StrictHttpResponse } from 'src/api/strict-http-response';
import { Identifier } from './models/Identifier';

export type IdentifierLike = Identifier | string;

export interface Identifiable {
  id: Identifier;
}

export interface InsertableService<T extends Identifiable> {
  insert$Response(params: { body?: T }, context?: HttpContext): Observable<StrictHttpResponse<void>>;
  insert(params: { body?: T }, context?: HttpContext): Observable<void>;
}

export interface ErasableService<T extends Identifiable> {
  erase$Response(params: { id: IdentifierLike }, context?: HttpContext): Observable<StrictHttpResponse<void>>;
  erase(params: { id: IdentifierLike }, context?: HttpContext): Observable<void>;
}

export interface PageableService<T extends Identifiable> extends CountInService {
  getPage$Response(
    params?: {
      filterName?: string;
      values?: string;
      sortBy?: string;
      orderBy?: 'ASC' | 'DESC' | 'RANDOM';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<T>>>;

  getPage(
    params?: {
      filterName?: string;
      values?: string;
      sortBy?: string;
      orderBy?: 'ASC' | 'DESC' | 'RANDOM';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<T>>;
}

export interface GettableService<T extends Identifiable> {
  get$Response(params: { id: IdentifierLike }, context?: HttpContext): Observable<StrictHttpResponse<T>>;
  get(params: { id: IdentifierLike }, context?: HttpContext): Observable<T>;

  getPage$Response(
    params?: {
      filterName?: string;
      values?: string;
      sortBy?: string;
      orderBy?: 'ASC' | 'DESC' | 'RANDOM';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<T>>>;

  getEntityName(): string;
}

export interface CountInService {
  count$Response(context?: HttpContext): Observable<StrictHttpResponse<number>>;
  count(context?: HttpContext): Observable<number>;
}

export interface UpdatableService<T extends Identifiable> {
  update$Response(params: { id: IdentifierLike; body?: T }, context?: HttpContext): Observable<StrictHttpResponse<void>>;
  update(params: { id: IdentifierLike; body?: T }, context?: HttpContext): Observable<void>;
  getEntityName(): string;
}

export interface AllService<T extends Identifiable>
  extends InsertableService<T>,
    ErasableService<T>,
    PageableService<T>,
    GettableService<T>,
    UpdatableService<T> {}

export interface BasicService<T extends Identifiable>
  extends CountInService,
    InsertableService<T>,
    ErasableService<T>,
    PageableService<T>,
    GettableService<T>,
    UpdatableService<T>,
    BaseService<T> {}

export type InsertableAndErasableService<T extends Identifiable> = InsertableService<T> & ErasableService<T> & BaseService<T>;

@Injectable()
export abstract class BaseService<T extends Identifiable> {
  private _rootUrl: string = '';
  protected nullEntity: T | null = null;
  protected cancelPendingRequests$ = new Subject<void>();

  protected constructor(protected config: ApiConfiguration, protected http: HttpClient) {}

  get rootUrl(): string {
    return this._rootUrl || this.config.rootUrl;
  }

  set rootUrl(rootUrl: string) {
    this._rootUrl = rootUrl;
  }

  catchNullEntityIfAvailable() {
    /* no op */
  }

  checkEntityWithNullIdentifier(): Observable<T> {
    return this.getPage({ filterName: this.getEntityName() + '_null' }).pipe(
      mergeMap( (entities : T[]) => {
        if (entities && entities.length > 0) {
          return of(entities[0]);
        }
        return throwError(() => new Error('No entities returned from getPage'));
      })
    );
  }

  cancelPendingRequests() {
    this.cancelPendingRequests$.next();
  }

  abstract getEntityName(): string;

  extractIdFromLocation(resp: StrictHttpResponse<any>): Identifier | null {
    const locationHeader = resp.headers.get('Location');
    if (!locationHeader) {
      return null;
    }
    const entityPath = `/${this.getEntityName()}/`;
    const startIndex = locationHeader.indexOf(entityPath);
    if (startIndex === -1) {
      return null;
    }
    const extractedId = locationHeader.substring(startIndex + entityPath.length);
    if (!extractedId) {
      return null;
    }
    return new Identifier(extractedId);
  }

  abstract getPage(
    params?: {
      filterName?: string;
      values?: string;
      sortBy?: string;
      orderBy?: 'ASC' | 'DESC' | 'RANDOM';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<T>>;

  abstract get$Response(params: { id: IdentifierLike }, context?: HttpContext): Observable<StrictHttpResponse<T>>;

  abstract get(params: { id: IdentifierLike }, context?: HttpContext): Observable<T>;
}
