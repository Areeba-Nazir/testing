import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-paraphrasing',
  standalone: true,
  imports: [],
  templateUrl: './paraphrasing.component.html',
  styleUrl: './paraphrasing.component.css'
})
export class ParaphrasingComponent {
  pasteText(): void {
    navigator.clipboard.readText().then(pastedText => {
      document.execCommand('insertText', false, pastedText);
      // // console.log(pastedText, 'pasted text')
      $("#editor").html(pastedText);
      // this.char_count = $("#editor").text().length;
      // this.word_count = $("#editor").text().trim().split(" ").length;
    }).catch(err => {
      console.error('Failed to read clipboard contents: ', err);
    });
  }
  sampletext(){
    $("#editor").html("We all are aware of the fact that plagiarism can destroy our careers and websites' credibility. Suppose you have detected that some proportion of your text is plagiarized. In that case, you can opt to use the best article rewriter to make your plagiarized sentences and display their plagiarism-free version in a matter of seconds. It means that it's not only wasted an hour or more trying to rewrite plagiarism from the text yourself and then putting to some responsibility for both of these demanding jobs and providing you 100% unique content in the blink of an eye. There is plagiarism, but only some platforms will provide you with the quality GrammarIN offers. This article is jam-packed with top-notch features to facilitate you in the best way possible. You can enjoy the following features.")
    // this.char_count = $("#editor").text().length;
    // this.word_count = $("#editor").text().trim().split(" ").length;
  }
}
