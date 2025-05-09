
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IQuestion } from '../../model/interface/question';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-quiz',
  imports: [FormsModule, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  questionList: IQuestion[] = []; // Initialize as an empty array
  htttp = inject(HttpClient);
  currentQuestionIndex: number = 0;
  selectedAnswer: string | null = null;
  feedback: string | null = null;
  score: number = 0;





  constructor() { }
  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.htttp.get('http://localhost:8080/questions/4').subscribe((response: any) => {
      this.questionList = response; // Assign the response to personList
      //console.log(this.questionList[0]); // Log the response to the console for debugging
    })
  }

  ///////////
  get currentQuestion(): IQuestion {
    return this.questionList[this.currentQuestionIndex];
  }

  get answerOptions(): string[] {
    const incorrect = this.currentQuestion.incorrect_answers.split(',');
    const options = [...incorrect, this.currentQuestion.correct_answer];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]]; // Swap
    }
    return options;
  }
  submitAnswer(): void {
    if (!this.selectedAnswer) {
      this.feedback = 'Please select an answer!';
      return;
    }

    if (this.selectedAnswer === this.currentQuestion.correct_answer) {
      this.feedback = 'Correct!';
      this.score++;
    } else {
      this.feedback = `Incorrect. The correct answer is: ${this.currentQuestion.correct_answer}`;
    }
  }

  nextQuestion(): void {
    this.feedback = null;
    this.selectedAnswer = null;
    if (this.currentQuestionIndex < this.questionList.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.feedback = `Quiz completed! Your score: ${this.score}/${this.questionList.length}`;
    }
  }

  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.feedback = null;
    this.score = 0;
  }
}