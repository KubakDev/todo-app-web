/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTodosGet
   */
  static readonly ApiTodosGetPath = '/api/todos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodosGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodosGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Todo>>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.ApiTodosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Todo>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodosGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodosGet$Plain(params?: {
  }): Observable<Array<Todo>> {

    return this.apiTodosGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Todo>>) => r.body as Array<Todo>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodosGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodosGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Todo>>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.ApiTodosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Todo>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodosGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodosGet$Json(params?: {
  }): Observable<Array<Todo>> {

    return this.apiTodosGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Todo>>) => r.body as Array<Todo>)
    );
  }

  /**
   * Path part for operation apiTodosPost
   */
  static readonly ApiTodosPostPath = '/api/todos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodosPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodosPost$Response(params?: {
    body?: Todo
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.ApiTodosPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodosPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodosPost(params?: {
    body?: Todo
  }): Observable<void> {

    return this.apiTodosPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiTodosIdGet
   */
  static readonly ApiTodosIdGetPath = '/api/todos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodosIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodosIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Todo>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.ApiTodosIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Todo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodosIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodosIdGet$Plain(params: {
    id: string;
  }): Observable<Todo> {

    return this.apiTodosIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Todo>) => r.body as Todo)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodosIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodosIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Todo>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.ApiTodosIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Todo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodosIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodosIdGet$Json(params: {
    id: string;
  }): Observable<Todo> {

    return this.apiTodosIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Todo>) => r.body as Todo)
    );
  }

  /**
   * Path part for operation apiTodosIdPut
   */
  static readonly ApiTodosIdPutPath = '/api/todos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodosIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodosIdPut$Response(params: {
    id: string;
    body?: Todo
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.ApiTodosIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodosIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodosIdPut(params: {
    id: string;
    body?: Todo
  }): Observable<void> {

    return this.apiTodosIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiTodosIdDelete
   */
  static readonly ApiTodosIdDeletePath = '/api/todos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodosIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodosIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.ApiTodosIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodosIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodosIdDelete(params: {
    id: string;
  }): Observable<void> {

    return this.apiTodosIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
