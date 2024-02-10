import { Component, OnDestroy } from '@angular/core';
import { Verb } from '../../shared/model/verb';
import { VerbServiceMockUp } from '../../service/verb.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { FilterLevel, FilterVerbGroup, Filters } from '../../shared/interface/filters';
import { Subject, debounceTime, delay, switchMap, takeUntil, tap } from 'rxjs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HighlightPipe } from '../../shared/pipe/highlight.pipe';

@Component({
  selector: 'nnt-verb-dictionnary',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DataViewModule,
    TagModule,
    InputSwitchModule,
    SelectButtonModule,
    ProgressSpinnerModule,
    HighlightPipe
  ],
  providers: [VerbServiceMockUp],
  templateUrl: './verb-dictionnary.component.html',
  styleUrl: './verb-dictionnary.component.scss'
})
export class VerbDictionnaryComponent implements OnDestroy {

  public userInput = '';
  public verbs: Array<Verb> = this.verbServiceMockUp.getAll();
  public english = false;
  public group: FilterVerbGroup = 'ALL';
  public groups: Array<FilterVerbGroup> = ['ALL', 'RU', 'U', 'IRR'];
  public jlptLevels: Array<FilterLevel> = ['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'];
  public level: FilterLevel = 'ALL';
  public loading = false;
  private userInputSub: Subject<string> = new Subject();
	private unsubscribe: Subject<void> = new Subject();

  constructor(private verbServiceMockUp: VerbServiceMockUp) {
    this.userInputSub
      .pipe(takeUntil(this.unsubscribe))
      .pipe(debounceTime(300))
      .pipe(tap((input) => {
        this.loading = true;
      }))
      .pipe(switchMap((input) => this.verbServiceMockUp.lookup(input, this.getFilters()).pipe(delay(2000))))
      .subscribe(verbs => {
        this.verbs = verbs;
        this.loading = false;
      });
  }

  public lookupVerb(): void {
    this.userInputSub.next(this.userInput);
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.unsubscribe();
  }

  private getFilters(): Filters {
    return { english : this.english, group: this.group, level: this.level };
  }
}
