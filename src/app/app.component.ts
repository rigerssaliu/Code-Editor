import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'RSTest';
  
  ngOnInit() { 

    $(document).ready(function () {
      $('.grid').height($(window).height());
  
      var frame = $('iframe'),
        contents = frame.contents(),
        body = contents.find('body'),
        styleTag = contents
          .find('head')
          .append('<style></style>')
          .children('style');
      $('textarea').focus(function () {
        var $this = $(this);
        $this.keyup(function () {
          if ($this.attr('id') === 'html') {
            body.html($this.val());
          } else {
            styleTag.text($this.val());
          }
        });
      });
    });
    
  }

  
}
