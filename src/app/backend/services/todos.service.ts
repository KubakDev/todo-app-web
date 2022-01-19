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

import { CreateTodo } from '../models/create-todo';
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
   * Path part for operation todosGet
   */
  static readonly TodosGetPath = '/todos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `todosGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  todosGet$Response(params?: {
    From?: string;
    To?: string;
  }): Observable<StrictHttpResponse<Array<Todo>>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.TodosGetPath, 'get');
    if (params) {
      rb.query('From', params.From, {});
      rb.query('To', params.To, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Todo>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `todosGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  todosGet(params?: {
    From?: string;
    To?: string;
  }): Observable<Array<Todo>> {

    return this.todosGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Todo>>) => r.body as Array<Todo>)
    );
  }

  /**
   * Path part for operation todosPost
   */
  static readonly TodosPostPath = '/todos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `todosPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  todosPost$Response(params?: {
    body?: CreateTodo
  }): Observable<StrictHttpResponse<Todo>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.TodosPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Todo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `todosPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  todosPost(params?: {
    body?: CreateTodo
  }): Observable<Todo> {

    return this.todosPost$Response(params).pipe(
      map((r: StrictHttpResponse<Todo>) => r.body as Todo)
    );
  }

  /**
   * Path part for operation todosIdGet
   */
  static readonly TodosIdGetPath = '/todos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `todosIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  todosIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Todo>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.TodosIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Todo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `todosIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  todosIdGet(params: {
    id: string;
  }): Observable<Todo> {

    return this.todosIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Todo>) => r.body as Todo)
    );
  }

  /**
   * Path part for operation todosIdPut
   */
  static readonly TodosIdPutPath = '/todos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `todosIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  todosIdPut$Response(params: {
    id: string;
    body?: CreateTodo
  }): Observable<StrictHttpResponse<Todo>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.TodosIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Todo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `todosIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  todosIdPut(params: {
    id: string;
    body?: CreateTodo
  }): Observable<Todo> {

    return this.todosIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<Todo>) => r.body as Todo)
    );
  }

  /**
   * Path part for operation todosIdDelete
   */
  static readonly TodosIdDeletePath = '/todos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `todosIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  todosIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.TodosIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `todosIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  todosIdDelete(params: {
    id: string;
  }): Observable<void> {

    return this.todosIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
