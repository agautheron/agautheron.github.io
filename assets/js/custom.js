async function callHALAPI(type) {
  try {
    const url = "https://api.archives-ouvertes.fr/search/?q=authIdHal_s:" + idhal + "&wt=json"
    const response = await fetch(url + "&fl=title_s,halId_s,citationRef_s,defenseDateY_i,journalTitle_s,authFullName_s ,fileMain_s, thumbId_i&fq=docType_s:"+type);
    const data = await response.json();
    //const publications = data.response.docs;
    return data.response.docs;
  } catch (error) {
    console.error(error);
  }
}



$(document).ready(function(){
    var main_section = $("#publi-hal");
    console.log(main_section);
    if (main_section.length === 0) {
        console.log("No Hal on this page");
        return 0;
    }

    /* THESIS */
    callHALAPI("THESE").then(data => {
        // Set title 
        $("#hal-thesis-card-title").text("Thesis (" + data.length + ")");
        
        // Set miniature
        $("#hal-thesis-miniature-url").attr("href", data[0].fileMain_s);
        $("#hal-thesis-miniature-image").attr("src", "//thumb.ccsd.cnrs.fr/" + data[0].thumbId_i + "/thumb");
    
        // Set content
        $("#hal-thesis-content-url").attr("href", "https://hal.science/" + data[0].halId_s);
        $("#hal-thesis-content-url").attr("target", "_blank");
        $("#hal-thesis-title").text(data[0].title_s[0]);
        $("#hal-thesis-author").attr("href", "https://hal.science/search/?q=*&authFullName_s=" + data[0].authFullName_s[0]);
        $("#hal-thesis-author").text(data[0].authFullName_s[0]);
        $("#hal-thesis-additional-info").text(data[0].defenseDateY_i);

        // Remove loader
        $("#hal-thesis-spinner").css("display", "none"); 
        $("#hal-thesis").css("display", "block");

        // Update mathjax
        MathJax.typeset([document.getElementById("hal-thesis")]);
    }).catch(error => console.error(error));

    /* ARTICLE */
    callHALAPI("ART").then(data => {
        // Set title 
        $("#hal-art-card-title").text("Journal article (" + data.length + ")");
        var tab = $("#hal-art-table");
        for (const p of data) {
            console.log(p);
            var str = ""
            str = str + "<tr>" +
                "<td class='d-none d-sm-table-cell'>" +
                    "<a href=" + p.fileMain_s + ">" +
                        "<div class='media d-none d-sm-block'>" + 
                            "<img src='//thumb.ccsd.cnrs.fr/" + p.thumbId_i + "/thumb' alt='Image document'>" + 
                        "</div>" + 
                    "</a>" + 
                "</td>" + 
                //
                "<td style='width: 100%' class='resume-title'>" +
                    "<a href='https://hal.science/" + p.halId_s + "' target='_blank'>" + 
                        "<h3 class='title-results'>" +
                            p.title_s[0] + 
                        "</h3>" + 
                        "<span class='authors-results'>" ;
            
            let nbit = p.authFullName_s.length;
            for (const a of p.authFullName_s) {
                str = str + 
                    "<a href='https://hal.science/search/?q=*&authFullName_s=" + 
                    a + "' alt='Documents de l\'auteur' target='_blank'>" + 
                    a + "</a>";
                if (--nbit) {
                    str = str + " ; ";
                };
            };

            str = str + "</span>" + 
                    "</a>";
            str = str + "<br>";
            str = str + 
                "<div class='citation-results'>" + 
                    p.citationRef_s +
                    "</div>" +
                "</td>" + 
            " </tr>";
            tab.append(str);
        };

        // Remove loader
        $("#hal-art-spinner").css("display", "none"); 
        $("#hal-art").css("display", "block");

        // Update mathjax
        MathJax.typeset([document.getElementById("ART")]);
    }).catch(error => console.error(error));

    /* PREPRINT */
    callHALAPI("UNDEFINED").then(data => {
        // Set title 
        $("#hal-preprint-card-title").text("Preprint (" + data.length + ")");
        var tab = $("#hal-preprint-table");
        for (const p of data) {
            console.log(p);
            var str = ""
            str = str + "<tr>" +
                "<td class='d-none d-sm-table-cell'>" +
                    "<a href=" + p.fileMain_s + ">" +
                        "<div class='media d-none d-sm-block'>" + 
                            "<img src='//thumb.ccsd.cnrs.fr/" + p.thumbId_i + "/thumb' alt='Image document'>" + 
                        "</div>" + 
                    "</a>" + 
                "</td>" + 
                //
                "<td style='width: 100%' class='resume-title'>" +
                    "<a href='https://hal.science/" + p.halId_s + "' target='_blank'>" + 
                        "<h3 class='title-results'>" +
                            p.title_s[0] + 
                        "</h3>" + 
                        "<span class='authors-results'>" ;
            
            let nbit = p.authFullName_s.length;
            for (const a of p.authFullName_s) {
                str = str + 
                    "<a href='https://hal.science/search/?q=*&authFullName_s=" + 
                    a + "' alt='Documents de l\'auteur' target='_blank'>" + 
                    a + "</a>";
                if (--nbit) {
                    str = str + " ; ";
                };
            };

            str = str + "</span>" + 
                    "</a>";
            str = str + "<br>";
            str = str + 
                "<div class='citation-results'>" + 
                    p.citationRef_s +
                    "</div>" +
                "</td>" + 
            " </tr>";
            tab.append(str);
        };
        // Remove loader
        $("#hal-preprint-spinner").css("display", "none"); 
        $("#hal-preprint").css("display", "block");

        // Update mathjax
        MathJax.typeset([document.getElementById("PREPRINT")]);
    }).catch(error => console.error(error));

    /* COMM */
    callHALAPI("COMM").then(data => {
        // Set title 
        $("#hal-comm-card-title").text("Communications (" + data.length + ")");
        var tab = $("#hal-comm-table");
        for (const p of data) {
            console.log(p);
            var str = ""
            str = str + "<tr>" +
                "<td class='d-none d-sm-table-cell'>" +
                   // "<a href=" + p.fileMain_s + ">" +
                    //    "<div class='media d-none d-sm-block'>" + 
                     //       "<img src='//thumb.ccsd.cnrs.fr/" + p.thumbId_i + "/thumb' alt='Image document'>" + 
                    //    "</div>" + 
                    //"</a>" + 
                "</td>" + 
                //
                "<td style='width: 100%' class='resume-title'>" +
                    "<a href='https://hal.science/" + p.halId_s + "' target='_blank'>" + 
                "<h3 class='title-results'>" +
                            p.title_s[0] + 
                        "</h3>" + 
                        "<span class='authors-results'>" ;
            
            let nbit = p.authFullName_s.length;
            for (const a of p.authFullName_s) {
                str = str + 
                    "<a href='https://hal.science/search/?q=*&authFullName_s=" + 
                    a + "' alt='Documents de l\'auteur' target='_blank'>" + 
                    a + "</a>";
                if (--nbit) {
                    str = str + " ; ";
                };
            };

            str = str + "</span>" + 
                    "</a>";
            str = str + "<br>";
            str = str + 
                "<div class='citation-results'>" + 
                    p.citationRef_s +
                    "</div>" +
                "</td>" + 
            " </tr>";
            tab.append(str);
        };

        // Remove loader
        $("#hal-comm-spinner").css("display", "none"); 
        $("#hal-comm").css("display", "block");

        // Update mathjax   
        MathJax.typeset([document.getElementById("COMM")]);
    }).catch(error => console.error(error));
});

/*
useful doctype: 
SOFTWARE
ART
COMM
UNDEFINED
*/

function collapse(elem) {
    const elem2 = $(elem.getAttribute("data-target"));
    if (elem2.css("display") === "none") {
        elem2.css("display","block");
        elem.querySelector(".icon-drop_down").classList.remove("fa-rotate-by");
    } else {
        elem2.css("display","none");
        elem.querySelector(".icon-drop_down").classList.add("fa-rotate-by");
    }
}

$(document).ready(function() {
    $(document).on('click', 'a[href*="#"], a[href*="/#"]', function (event) {
        event.preventDefault();

        var link = this.getAttribute('href');
        var n = link.split('#');

        console.log("#" + n[n.length -1 ]);

        var target = $('a[name="' + n[n.length-1] + '"]').offset();


        console.log(target.top);

        $('html, body').animate({scrollTop: target.top - 115}, 750);
    });
});
