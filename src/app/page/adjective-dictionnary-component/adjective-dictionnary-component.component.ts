import { Component } from '@angular/core';
import { Adjective } from '../../shared/model/adjective';
import { AdjectiveServiceMockUp } from '../../service/adjective.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { FilterAdjectiveGroup, FilterLevel, Filters } from '../../shared/interface/filters';

@Component({
  selector: 'nnt-adjective-dictionnary-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DataViewModule,
    TagModule,
    InputSwitchModule,
    SelectButtonModule
  ],
  providers: [AdjectiveServiceMockUp],
  templateUrl: './adjective-dictionnary-component.component.html',
  styleUrl: './adjective-dictionnary-component.component.scss'
})
export class AdjectiveDictionnaryComponentComponent {

  public userInput = '';
  public adjectives: Array<Adjective> = this.adjectiveServiceMockUp.getAll();
  public english = false;
  public group: FilterAdjectiveGroup = 'ALL';
  public groups: Array<FilterAdjectiveGroup> = ['ALL', 'NA', 'I'];
  public level: FilterLevel = 'ALL';
  public jlptLevels: Array<FilterLevel> = ['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'];

  constructor(private adjectiveServiceMockUp: AdjectiveServiceMockUp) {}

  public lookupAdjective(): void {
    this.adjectiveServiceMockUp
      .lookup(this.userInput, this.getFilters())
      .subscribe(adjectives => this.adjectives = adjectives);
  }

  private getFilters(): Filters {
    return { english : this.english, group: this.group, level: this.level };
  }
}
