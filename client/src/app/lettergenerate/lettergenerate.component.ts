import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router,ActivatedRoute } from '@angular/router'
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  templateUrl: './lettergenerate.component.html'
})
export class LettergenerateComponent {
  details: UserDetails
  firstname: any;
  lastname: any;
  userid: any;
  userinfo: any;
  htmlContent: any;
  totalincomecheckbox: any;
  nodebtcheckbox: any;
  nopetscheckbox: any;
  nosmokercheckbox: any;
  nochildrencheckbox: any;
  nomusicalcheckbox: any;
  longtermcheckbox: any;
  suretycheckbox: any;
  goodreferencecheckbox: any;
  admincheckbox: any;
  socialcheckbox: any;
  solidcheckbox: any;
  tenantcheckbox: any;
  registercheckbox: any;
  referencecheckbox: any;
  paycheckbox: any;
  collectioncheckbox: any;
  copycheckbox: any;
  introduce: any;
  motivation: any;
  alldatas: any;
  savedatas: any;
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: false,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'textright',
        class: 'textright',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: false,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['insertImage', 'insertVideo']
    ]
};
  constructor(private auth: AuthenticationService, private router: Router,private route: ActivatedRoute,private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.userid = this.route.snapshot.paramMap.get('id');
    this.alldatas = [];
    this.savedatas = [];
    this.auth.profile().subscribe(
      user => {
        this.details = user
        this.firstname = user.first_name;
        this.lastname = user.last_name;
      },
      err => {
        console.error(err)
      }
    )
    this.auth.getUserinfo(this.userid).subscribe(
      data => {
        this.userinfo = data.user;
        this.auth.getletter(this.userid).subscribe(
          letter => {
            if(letter.error)
            {
              (<HTMLInputElement>document.querySelector("#editletterbtn")).setAttribute("style", "display:none");
              this.htmlContent = "<h2><font size='4'>"+this.userinfo.familynamevalue + " " + this.userinfo.firstnamevalue+" &amp; "+this.userinfo.partnerfamilynamevalue + " " + this.userinfo.partnerfirstnamevalue+"</font></h2><div><font size='4'>"+this.userinfo.streetvalue + "</font></div><div><font size='4'>"+this.userinfo.postcodevalue + "</font></div><div><div>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;An die Liegenschaftsverwaltung</div><div><span></span>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;An die Hauseigent&#252;mer</div><div>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;01001, 1/26/2021<br></div><div><br></div><h5><b>Bewerbung f&#252;r das Mietobjekt&#160; Zimmerwohnung ,&#160;</b></h5><div><div>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;  &#160; <font size='4'><b>Fakten</b></font></div><div id='facttotalincome'><span><font size='4'>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <b>&#183;&#160;</b> Gesamteinkommen CHF0</font></span></div><div style='display: none' id='factnodebt'><span><font size='4'>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <b>&#183;&#160;</b> Kine Betreibungen order Schulden</font></span></div><div style='display: none' id='factnopets'><span><font size='4'>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <b>&#183;&#160;</b> Keine Haustiere</font></span></div><div id='factnosmoker'><span><font size='4'>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <b>&#183;&#160;</b> Nichtraucher</font></span></div><div style='display: none' id='factnochildren'><span><font size='4'>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <b>&#183;&#160;</b> Keine Kinder</font></span></div><div style='display: none' id='factnomusical'><span><font size='4'>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <b>&#183;&#160;</b> Keine Musikinstrumente und sehr ruhig</font></span></div><div style='display: none' id='factlongterm'><span><font size='4'>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <b>&#183;&#160;</b> Langjähriges Mietverhältnis</font></span></div><div style='display: none' id='factsurety'><span><font size='4'>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <b>&#183;&#160;</b> Bürge/Solidarhafter bei Bedarf</font></span></div><div style='display: none' id='factgoodreference'><span><font size='4'>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <b>&#183;&#160;</b> Gute Referenzen</font></span></div></div><div><br></div><div><div>Sehr geehrte Damen und Herren,</div><div><br></div><div><br></div><div id='introduce1'>da uns die angebotene Wohnung sehr gef&#228;llt und zu uns passen w&#252;rde, m&#246;chten wir uns als neue Mieter bewerben. Bitte erlauben Sie uns, uns kurz vorzustellen und Ihnen die wichtigsten Daten und Informationen zu schildern.</div><div style='display: none' id='introduce2'>wir m&#246;chten uns als neue Mieter um diese Wohnung bewerben, da uns diese rundum gef&#228;llt. Bitte erlauben Sie uns, uns kurz vorzustellen und Ihnen das Wichtigste &#252;ber uns mitzuteilen.&#160;</div><div style='display: none' id='introduce3'>wir m&#246;chten uns als neue Mieter f&#252;r die Wohnung bewerben, da diese unseren Vorstellungen genau entspricht. Bitte erlauben Sie uns, dass wir uns kurz vorstellen und Ihnen die wichtigsten Daten und Informationen schildern.</div><div><br></div><div><b>Einkommen</b></div><div><br></div><div>Ich bin Hausmann und stoltzer Vater und manage in dieser Funktion alles was im Haushalt und an sonstiger Organisation anf&#228;llt. Finanziell bin ich versorgt. Mein verf&#252;gbaresEinkommen betr&#228;gt CHF0.&#160;</div><div>Erw&#228;hnen m&#246;chte ich, dass vorsorglich ein Solidarhafter vorhanden ist, der Ihnen im unwahrscheinlichen Fall eines Zahlungsproblems trotzdem die notwendige Mietsicherheit bietet.</div><div><br></div><div><b>Wohnsituation und Motivation</b></div><div><br></div><div>Wir wollen zusammenziehen und freuen uns deshalb auf die gemeinsame Wohnung. Mit dieser perfekt passenden Wohnung w&#252;rde unser Traum erf&#252;llt.</div><div><br></div><div id='motivation1'>Wir sind gl&#252;cklich, dass wir auf Ihre Wohnung gesto&#223;en sind. Wir waren sofort begeistert, da diese unsere Vorstellungen voll erf&#252;llt. Wir versichern Ihnen, dass wir verantwortungsbewusst und ordentlich sind und die Miete p&#252;nktlich bezahlen. Weiterhin haben wir geplant, langfristig in der Wohnung zu bleiben. Wir w&#252;rden uns sehr freuen, wenn wir diese bekommen k&#246;nnten.</div><div style='display: none'  id='motivation2'>Die ausgeschriebene Wohnung trifft genau unsere Vorstellungen. Es passen nicht nur die Gr&#246;&#223;e und die Aufteilung, sondern auch die Lage und die Gegend sind f&#252;r uns perfekt. Wir sind sehr zuverl&#228;sslich und versichern Ihnen, dass wir die Miete p&#252;nktlich bezahlen und die Wohnung in einem ordentlichen Zustand erhalten. Wir waren sofort begeistert und w&#252;rden uns sehr freuen, wenn wir den Zuschlag bekommen w&#252;rden.<br></div><div style='display: none'  id='motivation3'>Wir w&#228;ren gl&#252;cklich, wenn wir die Wohnung bekommen w&#252;rden. Diese entspricht genau unseren W&#252;nschen hinsichtlich Gr&#246;&#223;e, Zuschnitt und Lage. Wir waren sofort begeistert und w&#252;rden uns &#252;ber eine Zusage sehr freuen. Sie k&#246;nnen versichert sein, dass wir die Wohnung nicht nur pflegen, sondern uns auch um kleinere handwerkliche Reparaturen k&#252;mmern werden.&#160; Auf eine verl&#228;ssliche Zahlung der Miete k&#246;nnen Sie sich verlassen!<br></div><div><br></div><div><b>Referenzen</b></div><div><br></div><div id='adminid'><b>&#183;</b>&#160; Heutige Verwaltung: usd<span>&#9;</span>192723234</div><div id='solidid'><b>&#183;</b>&#160; Solidarhafter:&#160; <span>&#9;</span></div><div id='tenantid'><b>&#183;</b>&#160; Das Nachmieter 24 Team:&#160; <span>&#9;</span>044 66 12 34</div><div><br></div><div>Wir sind bereit, das oben genannte Objekt per sofort oder nach Vereinbarung zu &#252;bernehmen.</div><div><br></div><div>Da uns die Wohnungssuche wichtig ist, haben wir das Nachmieter 24 Team gebeten, uns bei der Wohnungssuche professionell zu unterst&#252;tzen.</div><div><br></div><div>Nachmieter 24 (044 666 1234) ist bevollm&#228;chtigt, f&#252;r die Wohnungssuche relevante Entscheidungen zu treffen. Die Vollmacht erlischt nach der Wohnungs&#252;bernahme.</div><div><br></div><div>Gerne stehen wir oder das Nachmieter 24 Team Ihnen bei Bedarf zu Verf&#252;gung.</div><div><br></div><div>Besten Dank und freundliche Gr&#252;sse</div><div>Hladun Kostyantyn &amp; Roman Sydorenko</div><div><br></div><div><br></div><div><br></div><div><u>Anlagen:&#160;</u></div><div><div style='display: none' id='investmentregister'>Anmeldeformular</div><div style='display: none' id='investmentreference'>Referenzprotokoll</div><div style='display: none' id='investmentpay'>Lohnabrechnungen</div><div style='display: none' id='investmentcollection'>Betreibungsregisterauszug</div><div style='display: none' id='investmentcopy'>Ausweiskopie</div></div></div></div></div><div><font size='4'><br></font></div>";
              this.totalincomecheckbox = true;
              this.nodebtcheckbox = false;
              this.nopetscheckbox = false;
              this.nosmokercheckbox = true;
              this.nochildrencheckbox = false;
              this.nomusicalcheckbox = false;
              this.longtermcheckbox = false;
              this.suretycheckbox = false;
              this.goodreferencecheckbox = false;
              this.admincheckbox = true;
              this.socialcheckbox = true;
              this.solidcheckbox = true;
              this.tenantcheckbox = true;
              this.registercheckbox = false;
              this.referencecheckbox = false;
              this.paycheckbox = false;
              this.collectioncheckbox = false;
              this.copycheckbox = false;
              this.introduce = "introduce1";
              this.motivation = "motivation1";
            }
            else{
              (<HTMLInputElement>document.querySelector("#createletterbtn")).setAttribute("style", "display:none");
              this.alldatas = letter.user;
              console.log("check", letter.user)
              this.htmlContent = this.alldatas.htmlContent;
              this.totalincomecheckbox = this.alldatas.totalincomecheckbox;
              this.nodebtcheckbox = this.alldatas.nodebtcheckbox;
              this.nopetscheckbox = this.alldatas.nopetscheckbox;
              this.nosmokercheckbox = this.alldatas.nosmokercheckbox;
              this.nochildrencheckbox = this.alldatas.nochildrencheckbox;
              this.nomusicalcheckbox = this.alldatas.nomusicalcheckbox;
              this.longtermcheckbox = this.alldatas.longtermcheckbox;
              this.suretycheckbox = this.alldatas.suretycheckbox;
              this.goodreferencecheckbox = this.alldatas.goodreferencecheckbox;
              this.admincheckbox = this.alldatas.admincheckbox;
              this.socialcheckbox = this.alldatas.socialcheckbox;
              this.solidcheckbox = this.alldatas.solidcheckbox;
              this.tenantcheckbox = this.alldatas.tenantcheckbox;
              this.registercheckbox = this.alldatas.registercheckbox;
              this.referencecheckbox = this.alldatas.referencecheckbox;
              this.paycheckbox = this.alldatas.paycheckbox;
              this.collectioncheckbox = this.alldatas.collectioncheckbox;
              this.copycheckbox = this.alldatas.copycheckbox;
              this.introduce = this.alldatas.introduce;
              this.motivation = this.alldatas.motivation;
              setTimeout(() => {
                if(this.alldatas.introduce == "introduce1")
                {
                  this.sentence1();
                }
                if(this.alldatas.introduce == "introduce2")
                {
                  this.sentence2();
                }
                if(this.alldatas.introduce == "introduce3")
                {
                  this.sentence3();
                }
                if(this.alldatas.motivation == "motivation1")
                {
                  this.motivation1();
                }
                if(this.alldatas.motivation == "motivation2")
                {
                  this.motivation2();
                }
                if(this.alldatas.motivation == "motivation3")
                {
                  this.motivation3();
                }
                this.totalincomefunc();
                this.nodebtfunc();
                this.nopetsfunc();
                this.nosmokerfunc();
                this.nochildrenfunc();
                this.nomusicalfunc();
                this.longtermfunc();
                this.suretyfunc();
                this.goodreferencefunc();
                this.adminfunc();
                // this.socialfunc();
                this.solidfunc();
                this.tenantfunc();
                this.registerfunc();
                this.referencefunc();
                this.payfunc();
                this.collectionfunc();
                this.copyfunc();
              }, 100);
            }
          },
          err => {
            console.error(err)
          }
        )

      },
      err => {
        console.error(err)
      }
    )
  }

  sentence1() {
    (<HTMLInputElement>document.querySelector("#firstbtnline1")).classList.add("selectbtn");
    (<HTMLInputElement>document.querySelector("#firstbtnline2")).classList.remove("selectbtn");
    (<HTMLInputElement>document.querySelector("#firstbtnline3")).classList.remove("selectbtn");
    (<HTMLInputElement>document.querySelector("#introduce1")).setAttribute("style", "display:block");
    (<HTMLInputElement>document.querySelector("#introduce2")).setAttribute("style", "display:none");
    (<HTMLInputElement>document.querySelector("#introduce3")).setAttribute("style", "display:none");
    this.introduce = "introduce1";
  }

  sentence2() {
    (<HTMLInputElement>document.querySelector("#firstbtnline1")).classList.remove("selectbtn");
    (<HTMLInputElement>document.querySelector("#firstbtnline2")).classList.add("selectbtn");
    (<HTMLInputElement>document.querySelector("#firstbtnline3")).classList.remove("selectbtn");
    (<HTMLInputElement>document.querySelector("#introduce1")).setAttribute("style", "display:none");
    (<HTMLInputElement>document.querySelector("#introduce2")).setAttribute("style", "display:block");
    (<HTMLInputElement>document.querySelector("#introduce3")).setAttribute("style", "display:none");
    this.introduce = "introduce2";
  }

  sentence3() {
    (<HTMLInputElement>document.querySelector("#firstbtnline1")).classList.remove("selectbtn");
    (<HTMLInputElement>document.querySelector("#firstbtnline2")).classList.remove("selectbtn");
    (<HTMLInputElement>document.querySelector("#firstbtnline3")).classList.add("selectbtn");
    (<HTMLInputElement>document.querySelector("#introduce1")).setAttribute("style", "display:none");
    (<HTMLInputElement>document.querySelector("#introduce2")).setAttribute("style", "display:none");
    (<HTMLInputElement>document.querySelector("#introduce3")).setAttribute("style", "display:block");
    this.introduce = "introduce3";
  }

  motivation1() {
    (<HTMLInputElement>document.querySelector("#secondbtnline1")).classList.add("selectbtn");
    (<HTMLInputElement>document.querySelector("#secondbtnline2")).classList.remove("selectbtn");
    (<HTMLInputElement>document.querySelector("#secondbtnline3")).classList.remove("selectbtn");
    (<HTMLInputElement>document.querySelector("#motivation1")).setAttribute("style", "display:block");
    (<HTMLInputElement>document.querySelector("#motivation2")).setAttribute("style", "display:none");
    (<HTMLInputElement>document.querySelector("#motivation3")).setAttribute("style", "display:none");
    this.motivation = "motivation1";
  }

  motivation2() {
    (<HTMLInputElement>document.querySelector("#secondbtnline1")).classList.remove("selectbtn");
    (<HTMLInputElement>document.querySelector("#secondbtnline2")).classList.add("selectbtn");
    (<HTMLInputElement>document.querySelector("#secondbtnline3")).classList.remove("selectbtn");
    (<HTMLInputElement>document.querySelector("#motivation1")).setAttribute("style", "display:none");
    (<HTMLInputElement>document.querySelector("#motivation2")).setAttribute("style", "display:block");
    (<HTMLInputElement>document.querySelector("#motivation3")).setAttribute("style", "display:none");
    this.motivation = "motivation2";
  }

  motivation3() {
    (<HTMLInputElement>document.querySelector("#secondbtnline1")).classList.remove("selectbtn");
    (<HTMLInputElement>document.querySelector("#secondbtnline2")).classList.remove("selectbtn");
    (<HTMLInputElement>document.querySelector("#secondbtnline3")).classList.add("selectbtn");
    (<HTMLInputElement>document.querySelector("#motivation1")).setAttribute("style", "display:none");
    (<HTMLInputElement>document.querySelector("#motivation2")).setAttribute("style", "display:none");
    (<HTMLInputElement>document.querySelector("#motivation3")).setAttribute("style", "display:block");
    this.motivation = "motivation3";
  }

  events1() {
    (<HTMLInputElement>document.querySelector("#thirdbtnline1")).classList.add("selectmenu");
    (<HTMLInputElement>document.querySelector("#thirdbtnline2")).classList.remove("selectmenu");
    (<HTMLInputElement>document.querySelector("#thirdbtnline3")).classList.remove("selectmenu");
    (<HTMLInputElement>document.querySelector("#thirdbtnline4")).classList.remove("selectmenu");
    (<HTMLInputElement>document.querySelector("#factid")).setAttribute("style", "display:flex");
    (<HTMLInputElement>document.querySelector("#referenceid")).setAttribute("style", "display:none");
    (<HTMLInputElement>document.querySelector("#createtextid")).setAttribute("style", "display:none");
  }

  events2() {
    (<HTMLInputElement>document.querySelector("#thirdbtnline1")).classList.remove("selectmenu");
    (<HTMLInputElement>document.querySelector("#thirdbtnline2")).classList.add("selectmenu");
    (<HTMLInputElement>document.querySelector("#thirdbtnline3")).classList.remove("selectmenu");
    (<HTMLInputElement>document.querySelector("#thirdbtnline4")).classList.remove("selectmenu");
    (<HTMLInputElement>document.querySelector("#factid")).setAttribute("style", "display:none");
    (<HTMLInputElement>document.querySelector("#referenceid")).setAttribute("style", "display:none");
    (<HTMLInputElement>document.querySelector("#createtextid")).setAttribute("style", "display:flex");
  }

  events3() {
    (<HTMLInputElement>document.querySelector("#thirdbtnline1")).classList.remove("selectmenu");
    (<HTMLInputElement>document.querySelector("#thirdbtnline2")).classList.remove("selectmenu");
    (<HTMLInputElement>document.querySelector("#thirdbtnline3")).classList.add("selectmenu");
    (<HTMLInputElement>document.querySelector("#thirdbtnline4")).classList.remove("selectmenu");
    (<HTMLInputElement>document.querySelector("#my_file")).click();
  }

  events4() {
    (<HTMLInputElement>document.querySelector("#thirdbtnline1")).classList.remove("selectmenu");
    (<HTMLInputElement>document.querySelector("#thirdbtnline2")).classList.remove("selectmenu");
    (<HTMLInputElement>document.querySelector("#thirdbtnline3")).classList.remove("selectmenu");
    (<HTMLInputElement>document.querySelector("#thirdbtnline4")).classList.add("selectmenu");
    (<HTMLInputElement>document.querySelector("#factid")).setAttribute("style", "display:none");
    (<HTMLInputElement>document.querySelector("#referenceid")).setAttribute("style", "display:flex");
    (<HTMLInputElement>document.querySelector("#createtextid")).setAttribute("style", "display:none");
  }

  totalincomefunc() {
    if(this.totalincomecheckbox == true){
      (<HTMLInputElement>document.querySelector("#facttotalincome")).setAttribute("style", "display:block");
    }
    if(this.totalincomecheckbox == false){
      (<HTMLInputElement>document.querySelector("#facttotalincome")).setAttribute("style", "display:none");
    }
  }

  nodebtfunc() {
    if(this.nodebtcheckbox == true){
      (<HTMLInputElement>document.querySelector("#factnodebt")).setAttribute("style", "display:block");
    }
    if(this.nodebtcheckbox == false){
      (<HTMLInputElement>document.querySelector("#factnodebt")).setAttribute("style", "display:none");
    }
  }

  nopetsfunc() {
    if(this.nopetscheckbox == true){
      (<HTMLInputElement>document.querySelector("#factnopets")).setAttribute("style", "display:block");
    }
    if(this.nopetscheckbox == false){
      (<HTMLInputElement>document.querySelector("#factnopets")).setAttribute("style", "display:none");
    }
  }

  nosmokerfunc() {
    if(this.nosmokercheckbox == true){
      (<HTMLInputElement>document.querySelector("#factnosmoker")).setAttribute("style", "display:block");
    }
    if(this.nosmokercheckbox == false){
      (<HTMLInputElement>document.querySelector("#factnosmoker")).setAttribute("style", "display:none");
    }
  }

  nochildrenfunc() {
    if(this.nochildrencheckbox == true){
      (<HTMLInputElement>document.querySelector("#factnochildren")).setAttribute("style", "display:block");
    }
    if(this.nochildrencheckbox == false){
      (<HTMLInputElement>document.querySelector("#factnochildren")).setAttribute("style", "display:none");
    }
  }

  nomusicalfunc() {
    if(this.nomusicalcheckbox == true){
      (<HTMLInputElement>document.querySelector("#factnomusical")).setAttribute("style", "display:block");
    }
    if(this.nomusicalcheckbox == false){
      (<HTMLInputElement>document.querySelector("#factnomusical")).setAttribute("style", "display:none");
    }
  }

  longtermfunc() {
    if(this.longtermcheckbox == true){
      (<HTMLInputElement>document.querySelector("#factlongterm")).setAttribute("style", "display:block");
    }
    if(this.longtermcheckbox == false){
      (<HTMLInputElement>document.querySelector("#factlongterm")).setAttribute("style", "display:none");
    }
  }

  suretyfunc() {
    if(this.suretycheckbox == true){
      (<HTMLInputElement>document.querySelector("#factsurety")).setAttribute("style", "display:block");
    }
    if(this.suretycheckbox == false){
      (<HTMLInputElement>document.querySelector("#factsurety")).setAttribute("style", "display:none");
    }
  }

  goodreferencefunc() {
    if(this.goodreferencecheckbox == true){
      (<HTMLInputElement>document.querySelector("#factgoodreference")).setAttribute("style", "display:block");
    }
    if(this.goodreferencecheckbox == false){
      (<HTMLInputElement>document.querySelector("#factgoodreference")).setAttribute("style", "display:none");
    }
  }

  adminfunc() {
    if(this.admincheckbox == true){
      (<HTMLInputElement>document.querySelector("#adminid")).setAttribute("style", "display:block");
    }
    if(this.admincheckbox == false){
      (<HTMLInputElement>document.querySelector("#adminid")).setAttribute("style", "display:none");
    }
  }

  // socialfunc() {
  //   if(this.socialcheckbox == true){
  //     (<HTMLInputElement>document.querySelector("#socialid")).setAttribute("style", "display:block");
  //   }
  //   if(this.socialcheckbox == false){
  //     (<HTMLInputElement>document.querySelector("#socialid")).setAttribute("style", "display:none");
  //   }
  // }

  solidfunc() {
    if(this.solidcheckbox == true){
      (<HTMLInputElement>document.querySelector("#solidid")).setAttribute("style", "display:block");
    }
    if(this.solidcheckbox == false){
      (<HTMLInputElement>document.querySelector("#solidid")).setAttribute("style", "display:none");
    }
  }

  tenantfunc() {
    if(this.tenantcheckbox == true){
      (<HTMLInputElement>document.querySelector("#tenantid")).setAttribute("style", "display:block");
    }
    if(this.tenantcheckbox == false){
      (<HTMLInputElement>document.querySelector("#tenantid")).setAttribute("style", "display:none");
    }
  }

  registerfunc() {
    if(this.registercheckbox == true){
      (<HTMLInputElement>document.querySelector("#investmentregister")).setAttribute("style", "display:block");
    }
    if(this.registercheckbox == false){
      (<HTMLInputElement>document.querySelector("#investmentregister")).setAttribute("style", "display:none");
    }
  }

  referencefunc() {
    console.log("reference")
    if(this.referencecheckbox == true){
      (<HTMLInputElement>document.querySelector("#investmentreference")).setAttribute("style", "display:block");
    }
    if(this.referencecheckbox == false){
      (<HTMLInputElement>document.querySelector("#investmentreference")).setAttribute("style", "display:none");
    }
  }

  payfunc() {
    console.log("pay")
    if(this.paycheckbox == true){
      (<HTMLInputElement>document.querySelector("#investmentpay")).setAttribute("style", "display:block");
    }
    if(this.paycheckbox == false){
      (<HTMLInputElement>document.querySelector("#investmentpay")).setAttribute("style", "display:none");
    }
  }

  collectionfunc() {
    if(this.collectioncheckbox == true){
      (<HTMLInputElement>document.querySelector("#investmentcollection")).setAttribute("style", "display:block");
    }
    if(this.collectioncheckbox == false){
      (<HTMLInputElement>document.querySelector("#investmentcollection")).setAttribute("style", "display:none");
    }
  }

  copyfunc() {
    if(this.copycheckbox == true){
      (<HTMLInputElement>document.querySelector("#investmentcopy")).setAttribute("style", "display:block");
    }
    if(this.copycheckbox == false){
      (<HTMLInputElement>document.querySelector("#investmentcopy")).setAttribute("style", "display:none");
    }
  }

  createfunc() {
    this.savedatas = {
      userid: this.userid,
      htmlContent: this.htmlContent,
      totalincomecheckbox: this.totalincomecheckbox,
      nodebtcheckbox: this.nodebtcheckbox,
      nopetscheckbox: this.nopetscheckbox,
      nosmokercheckbox: this.nosmokercheckbox,
      nochildrencheckbox: this.nochildrencheckbox,
      nomusicalcheckbox: this.nomusicalcheckbox,
      longtermcheckbox: this.longtermcheckbox,
      suretycheckbox: this.suretycheckbox,
      goodreferencecheckbox: this.goodreferencecheckbox,
      admincheckbox: this.admincheckbox,
      socialcheckbox: this.socialcheckbox,
      solidcheckbox: this.solidcheckbox,
      tenantcheckbox: this.tenantcheckbox,
      registercheckbox: this.registercheckbox,
      referencecheckbox: this.referencecheckbox,
      paycheckbox: this.paycheckbox,
      collectioncheckbox: this.collectioncheckbox,
      copycheckbox: this.copycheckbox,
      introduce: this.introduce,
      motivation: this.motivation,
    }
    this.auth.createletter(this.savedatas).subscribe(
      () => {
        window.location.reload()
      },
      err => {
        console.error(err)
      }
    )
  }

  savefunc() {
    this.savedatas = {
      userid: this.userid,
      htmlContent: this.htmlContent,
      totalincomecheckbox: this.totalincomecheckbox,
      nodebtcheckbox: this.nodebtcheckbox,
      nopetscheckbox: this.nopetscheckbox,
      nosmokercheckbox: this.nosmokercheckbox,
      nochildrencheckbox: this.nochildrencheckbox,
      nomusicalcheckbox: this.nomusicalcheckbox,
      longtermcheckbox: this.longtermcheckbox,
      suretycheckbox: this.suretycheckbox,
      goodreferencecheckbox: this.goodreferencecheckbox,
      admincheckbox: this.admincheckbox,
      socialcheckbox: this.socialcheckbox,
      solidcheckbox: this.solidcheckbox,
      tenantcheckbox: this.tenantcheckbox,
      registercheckbox: this.registercheckbox,
      referencecheckbox: this.referencecheckbox,
      paycheckbox: this.paycheckbox,
      collectioncheckbox: this.collectioncheckbox,
      copycheckbox: this.copycheckbox,
      introduce: this.introduce,
      motivation: this.motivation,
    }
    this.auth.editletter(this.savedatas).subscribe(
      () => {
        window.location.reload()
      },
      err => {
        console.error(err)
      }
    )
  }

  deletefunc() {
    this.auth.deleteletter(this.userid).subscribe(
      data => {
        console.log("delete",data)
		    // this._notifications.create(title, content, type1, temp)
        window.location.reload()
      },
      err => {
        console.error(err)
      }
    )
  }

}
