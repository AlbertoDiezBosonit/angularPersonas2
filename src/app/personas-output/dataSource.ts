/*
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable, of } from 'rxjs'; // para llamadas asincronas
import { PersonaOutput } from "../personaOutput";
import { PersonasOutputComponent } from "./personas-output.component";
import { PersonasComponent } from "../personas/personas.component";
   

export class LessonsDataSource implements DataSource<PersonaOutput> {

    private lessonsSubject = new BehaviorSubject<PersonaOutput[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private coursesService: CoursesService) {}

    connect(collectionViewer: CollectionViewer): Observable<PersonaOutput[]> {
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }

    loadLessons(courseId: number, filter = '',
                sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

        this.loadingSubject.next(true);

        this.coursesService.findLessons(courseId, filter, sortDirection,
            pageIndex, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(PersonasOutputComponent => this.lessonsSubject.next(PersonasComponent));
    }    
}*/