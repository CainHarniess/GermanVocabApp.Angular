import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VocabList } from '../models/vocab-list.interface';
import { HttpVocabService } from '../services/http-vocab.service';

@Component({
  selector: 'app-vocab-list-form',
  templateUrl: './vocab-list-form.component.html',
  styleUrls: ['./vocab-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListFormComponent implements OnInit {

  @Output() onFormSubmitted = new EventEmitter<VocabList>()

  constructor(private fb: FormBuilder, private vocabService: HttpVocabService,
    private router: Router) { }

  public vocabListForm!: FormGroup;

  ngOnInit(): void {
    this.vocabListForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  public onFormSubmit(): void {
    const vocabList: VocabList = this.vocabListForm.value as VocabList;
    const addVocabList: Subscription = this.vocabService.add(vocabList)
      .subscribe(newListId => {
        addVocabList.unsubscribe();
        this.router.navigate(["vocab-lists"]);
      });
  }
}
