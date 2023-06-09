import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { HttpErrorService } from './http-error.service';
import {
  SignUpResponse,
  SignUpBody,
  SignInResponseBody,
  SignInBody,
} from '../types/auth.types';
import {
  Column,
  ColumnBody,
  ColumnOrderPatchBody,
} from '../types/column.types';
import { Board, BoardBody } from '../types/board.types';
import {
  Task,
  TaskBody,
  TaskUpdateBody,
  TaskByIdBody,
} from '../types/tasks.types';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = 'http://localhost:3000';

  usersPath = '/users';

  signUpPath = '/auth/signup';

  singInPath = '/auth/signin';

  boardsPath = '/boards';

  columnsPath = '/columns';

  columnsSetPath = '/columnsSet';

  tasksPath = '/tasks';

  tasksSetPath = '/tasksSet';

  constructor(private http: HttpClient, private httpError: HttpErrorService) {}

  public getUsers(): Observable<SignUpResponse[] | Observable<never>> {
    return this.http
      .get<SignUpResponse[]>(this.url + this.usersPath)
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public getUser(
    userId: string
  ): Observable<SignUpResponse | Observable<never>> {
    return this.http
      .get<SignUpResponse>(this.url + this.usersPath + '/' + userId)
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public updateUser(
    userId: string,
    params: SignUpBody
  ): Observable<SignUpResponse | Observable<never>> {
    return this.http
      .put<SignUpResponse>(this.url + this.usersPath + '/' + userId, params)
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public deleteUser(
    userId: string
  ): Observable<SignUpResponse | Observable<never>> {
    return this.http
      .delete<SignUpResponse>(this.url + this.usersPath + '/' + userId)
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public signUp(
    params: SignUpBody
  ): Observable<SignUpResponse | Observable<never>> {
    return this.http
      .post<SignUpResponse>(this.url + this.signUpPath, params)
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public singIn(
    params: SignInBody
  ): Observable<SignInResponseBody | Observable<never>> {
    return this.http
      .post<SignInResponseBody>(this.url + this.singInPath, params)
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }
  public createBoard(params: BoardBody): Observable<Board | Observable<never>> {
    return this.http
      .post<Board>(this.url + this.boardsPath, params)
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }
  public getAllBoards(): Observable<Board[] | Observable<never>> {
    return this.http
      .get<Board[]>(this.url + this.boardsPath)
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public getBoard(boardId: string): Observable<Board | Observable<never>> {
    return this.http
      .get<Board>(this.url + this.boardsPath + '/' + boardId)
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }
  public updateBoard(
    boardId: string,
    params: BoardBody
  ): Observable<Board | Observable<never>> {
    return this.http
      .put<Board>(this.url + this.boardsPath + '/' + boardId, params)
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }
  public deleteBoard(boardId: string): Observable<Board | Observable<never>> {
    return this.http
      .delete<Board>(this.url + this.boardsPath + '/' + boardId)
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }
  public getAllColumns(
    boardId: string
  ): Observable<Column[] | Observable<never>> {
    return this.http
      .get<Column[]>(
        this.url + this.boardsPath + '/' + boardId + this.columnsPath
      )
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public getColumn(
    boardId: string,
    columnId: string
  ): Observable<Column | Observable<never>> {
    return this.http
      .get<Column>(
        this.url +
          this.boardsPath +
          '/' +
          boardId +
          this.columnsPath +
          '/' +
          columnId
      )
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }
  public createColumn(
    boardId: string,
    params: ColumnBody
  ): Observable<Column | Observable<never>> {
    console.log(boardId);
    return this.http
      .post<Column>(
        this.url + this.boardsPath + '/' + boardId + this.columnsPath,
        params
      )
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public updateColumn(
    boardId: string,
    columnId: string,
    params: ColumnBody
  ): Observable<Column | Observable<never>> {
    return this.http
      .put<Column>(
        this.url +
          this.boardsPath +
          '/' +
          boardId +
          this.columnsPath +
          '/' +
          columnId,
        params
      )
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public deleteColumn(
    boardId: string,
    columnId: string
  ): Observable<Column | Observable<never>> {
    return this.http
      .delete<Column>(
        this.url +
          this.boardsPath +
          '/' +
          boardId +
          this.columnsPath +
          '/' +
          columnId
      )
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public getAllTasks(
    boardId: string,
    columnId: string
  ): Observable<Task[] | Observable<never>> {
    return this.http
      .get<Task[]>(
        this.url +
          this.boardsPath +
          '/' +
          boardId +
          this.columnsPath +
          '/' +
          columnId +
          this.tasksPath
      )
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public getTask(
    boardId: string,
    columnId: string,
    taskId: string
  ): Observable<Task | Observable<never>> {
    return this.http
      .get<Task>(
        this.url +
          this.boardsPath +
          '/' +
          boardId +
          this.columnsPath +
          '/' +
          columnId +
          this.tasksPath +
          '/' +
          taskId
      )
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public createTask(
    boardId: string,
    columnId: string,
    params: TaskBody
  ): Observable<Task | Observable<never>> {
    return this.http
      .post<Task>(
        this.url +
          this.boardsPath +
          '/' +
          boardId +
          this.columnsPath +
          '/' +
          columnId +
          this.tasksPath,
        params
      )
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public deleteTask(
    boardId: string,
    columnId: string,
    taskId: string
  ): Observable<Task | Observable<never>> {
    return this.http
      .delete<Task>(
        this.url +
          this.boardsPath +
          '/' +
          boardId +
          this.columnsPath +
          '/' +
          columnId +
          this.tasksPath +
          '/' +
          taskId
      )
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }

  public updateTask(
    boardId: string,
    columnId: string,
    taskId: string,
    params: TaskByIdBody
  ): Observable<Task | Observable<never>> {
    return this.http
      .put<Task>(
        this.url +
          this.boardsPath +
          '/' +
          boardId +
          this.columnsPath +
          '/' +
          columnId +
          this.tasksPath +
          '/' +
          taskId,
        params
      )
      .pipe(catchError(async (err) => this.httpError.catchErrors(err)));
  }
  updateArrOfCol(
    arr: ColumnOrderPatchBody[]
  ): Observable<Column[] | Observable<never> | number> {
    return this.http
      .patch<Column[]>(this.url + this.columnsSetPath, arr)
      .pipe(
        catchError(async (err: HttpErrorResponse) =>
          this.httpError.catchErrors(err, true)
        )
      );
  }

  updateArrOfTasks(
    arr: TaskUpdateBody[]
  ): Observable<Task[] | Observable<never> | number> {
    return this.http
      .patch<Task[]>(this.url + this.tasksSetPath, arr)
      .pipe(
        catchError(async (err: HttpErrorResponse) =>
          this.httpError.catchErrors(err, true)
        )
      );
  }

  searchTasks(
    keywords: string,
    userId?: string
  ): Observable<Task[] | Observable<never>> {
    let params = new HttpParams();

    if (userId) {
      params = params.set('userId', userId || '');
    }

    if (keywords) {
      params = params.set('search', keywords || '');
    }

    return this.http
      .get<Task[]>(this.url + this.tasksSetPath, {
        params: params,
      })
      .pipe(catchError((err) => this.httpError.catchErrors(err)));
  }
}
