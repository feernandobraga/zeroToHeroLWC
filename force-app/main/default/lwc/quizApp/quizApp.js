import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {


    // for storing answers
    selected = {}

    correctAnswers = 0;

    isSubmitted = false

    get isScoredFull() {
        return `slds-text-heading_large  slds-var-m-bottom_medium ` +
            `${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }


    myQuestions = [
        {
            id: "Question1",
            question: "Which one of the following is not a template loop?",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },

        {
            id: "Question2",
            question: "Which one of the files is invalid in LWC component folder?",
            answers: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"
        },

        {
            id: "Question3",
            question: "Which one of the following is not a directive?",
            answers: {
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            correctAnswer: "c"
        }

    ]

    // this method compares how many keys "myQuestions" has against how
    // many keys "selected" has.
    // it will return true or false, which is used to control the submit button
    get isSubmitDisabled() {

        const totalQuestions = Object.keys(this.myQuestions).length;
        const totalAnswersSelected = Object.keys(this.selected).length;

        // if this evaluates to true, the button is disabled
        // otherwise, if it evaluates to false so submit is not disabled
        return totalQuestions !== totalAnswersSelected;

    }

    changeHandler(event) {

        // console.log("name", event.target.name)
        // console.log("value", event.target.value)

        // destruct name and value from event.target
        const { name, value } = event.target

        // get whatever is in selected and add a property name with value "value"
        // e.g. { question1 : a}
        this.selected = { ... this.selected, [name]: value }

        console.log('value of selected: ', this.selected)

    }

    handleSubmitOnClick(event) {
        event.preventDefault();

        this.isSubmitted = true;

        let correct = this.myQuestions.filter((eachQuestionObject) => {
            console.log(eachQuestionObject)
            return eachQuestionObject.correctAnswer === this.selected[eachQuestionObject.id]
        })
        // let correct = this.myQuestions.filter(item => item.correctAnswer === this.selected[item.id])
        // console.log(correct);
        /**
         * for each object in myQuestions:
         * is the correctAnswer property === to the value store in selected:{ 'question1' }?
         * 
         * e.g.
         * this.selected = {"Question1" : "a", "Question2" : "b", "Question3" : "c"}
         * so this.selected["Question1"] returns a
         * so this.selected["Question2"] returns b
         * so this.selected["Question3"] returns c
         * 
         * now:
         * is myQuestions[0].correctAnswer === the value stored at selected["question1"]?
         * is myQuestions[1].correctAnswer === the value stored at selected["question2"]?
         * 
         */

        console.log('correct answers: ', correct);

        this.correctAnswers = correct.length
        console.log('Number of correct answers: ', this.correctAnswers);



    }

    handleResetOnClick() {
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted = false
    }


}