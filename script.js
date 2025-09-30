document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    // The complete MCU chronological data parsed from the document
    const mcuData = [
        {"id":1,"title":"Captain America: The First Avenger","parentSeries":"Phase One","type":"Movie","releaseDate":"2011-07-22","runtime":124,"phase":"Phase One"},
        {"id":2,"title":"Agent Carter (One-Shot)","parentSeries":"Marvel One-Shots","type":"Short","releaseDate":"2013-09-03","runtime":15,"phase":"Phase One"},
        {"id":3,"title":"Agent Carter S01E01: \"Now is Not the End\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2015-01-06","runtime":43,"phase":"Phase One"},
        {"id":4,"title":"Agent Carter S01E02: \"Bridge and Tunnel\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2015-01-06","runtime":43,"phase":"Phase One"},
        {"id":5,"title":"Agent Carter S01E03: \"Time and Tide\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2015-01-13","runtime":42,"phase":"Phase One"},
        {"id":6,"title":"Agent Carter S01E04: \"The Blitzkrieg Button\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2015-01-27","runtime":42,"phase":"Phase One"},
        {"id":7,"title":"Agent Carter S01E05: \"The Iron Ceiling\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2015-02-03","runtime":42,"phase":"Phase One"},
        {"id":8,"title":"Agent Carter S01E06: \"A Sin to Err\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2015-02-10","runtime":42,"phase":"Phase One"},
        {"id":9,"title":"Agent Carter S01E07: \"SNAFU\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2015-02-17","runtime":42,"phase":"Phase One"},
        {"id":10,"title":"Agent Carter S01E08: \"Valediction\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2015-02-24","runtime":42,"phase":"Phase One"},
        {"id":11,"title":"Agent Carter S02E01: \"The Lady in the Lake\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2016-01-19","runtime":43,"phase":"Phase One"},
        {"id":12,"title":"Agent Carter S02E02: \"A View in the Dark\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2016-01-19","runtime":43,"phase":"Phase One"},
        {"id":13,"title":"Agent Carter S02E03: \"Better Angels\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2016-01-26","runtime":42,"phase":"Phase One"},
        {"id":14,"title":"Agent Carter S02E04: \"Smoke & Mirrors\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2016-02-02","runtime":42,"phase":"Phase One"},
        {"id":15,"title":"Agent Carter S02E05: \"The Atomic Job\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2016-02-09","runtime":42,"phase":"Phase One"},
        {"id":16,"title":"Agent Carter S02E06: \"Life of the Party\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2016-02-16","runtime":42,"phase":"Phase One"},
        {"id":17,"title":"Agent Carter S02E07: \"Monsters\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2016-02-16","runtime":42,"phase":"Phase One"},
        {"id":18,"title":"Agent Carter S02E08: \"The Edge of Mystery\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2016-02-23","runtime":42,"phase":"Phase One"},
        {"id":19,"title":"Agent Carter S02E09: \"A Little Song and Dance\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2016-02-23","runtime":41,"phase":"Phase One"},
        {"id":20,"title":"Agent Carter S02E10: \"Hollywood Ending\"","parentSeries":"Agent Carter","type":"TV Episode","releaseDate":"2016-03-01","runtime":42,"phase":"Phase One"},
        {"id":21,"title":"Captain Marvel","parentSeries":"Phase One","type":"Movie","releaseDate":"2019-03-08","runtime":124,"phase":"Phase One"},
        {"id":22,"title":"Iron Man","parentSeries":"Phase One","type":"Movie","releaseDate":"2008-05-02","runtime":126,"phase":"Phase One"},
        {"id":23,"title":"Iron Man 2","parentSeries":"Phase One","type":"Movie","releaseDate":"2010-05-07","runtime":124,"phase":"Phase One"},
        {"id":24,"title":"The Incredible Hulk","parentSeries":"Phase One","type":"Movie","releaseDate":"2008-06-13","runtime":112,"phase":"Phase One"},
        {"id":25,"title":"A Funny Thing Happened on the Way to Thor's Hammer (One-Shot)","parentSeries":"Marvel One-Shots","type":"Short","releaseDate":"2011-10-25","runtime":4,"phase":"Phase One"},
        {"id":26,"title":"Thor","parentSeries":"Phase One","type":"Movie","releaseDate":"2011-05-06","runtime":115,"phase":"Phase One"},
        {"id":27,"title":"The Consultant (One-Shot)","parentSeries":"Marvel One-Shots","type":"Short","releaseDate":"2011-09-13","runtime":4,"phase":"Phase One"},
        {"id":28,"title":"The Avengers","parentSeries":"Phase One","type":"Movie","releaseDate":"2012-05-04","runtime":143,"phase":"Phase One"},
        {"id":29,"title":"Item 47 (One-Shot)","parentSeries":"Marvel One-Shots","type":"Short","releaseDate":"2012-09-25","runtime":12,"phase":"Phase Two"},
        {"id":30,"title":"Iron Man 3","parentSeries":"Phase Two","type":"Movie","releaseDate":"2013-05-03","runtime":130,"phase":"Phase Two"},
        {"id":31,"title":"All Hail the King (One-Shot)","parentSeries":"Marvel One-Shots","type":"Short","releaseDate":"2014-02-04","runtime":14,"phase":"Phase Two"},
        {"id":32,"title":"Agents of S.H.I.E.L.D. S01E01: \"Pilot\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2013-09-24","runtime":45,"phase":"Phase Two"},
        {"id":33,"title":"Agents of S.H.I.E.L.D. S01E02: \"0-8-4\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2013-10-01","runtime":45,"phase":"Phase Two"},
        {"id":34,"title":"Agents of S.H.I.E.L.D. S01E03: \"The Asset\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2013-10-08","runtime":44,"phase":"Phase Two"},
        {"id":35,"title":"Agents of S.H.I.E.L.D. S01E04: \"Eye Spy\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2013-10-15","runtime":45,"phase":"Phase Two"},
        {"id":36,"title":"Agents of S.H.I.E.L.D. S01E05: \"Girl in the Flower Dress\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2013-10-22","runtime":45,"phase":"Phase Two"},
        {"id":37,"title":"Agents of S.H.I.E.L.D. S01E06: \"FZZT\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2013-11-05","runtime":44,"phase":"Phase Two"},
        {"id":38,"title":"Agents of S.H.I.E.L.D. S01E07: \"The Hub\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2013-11-12","runtime":44,"phase":"Phase Two"},
        {"id":39,"title":"Thor: The Dark World","parentSeries":"Phase Two","type":"Movie","releaseDate":"2013-11-08","runtime":112,"phase":"Phase Two"},
        {"id":40,"title":"Agents of S.H.I.E.L.D. S01E08: \"The Well\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2013-11-19","runtime":44,"phase":"Phase Two"},
        {"id":41,"title":"Agents of S.H.I.E.L.D. S01E09: \"Repairs\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2013-11-26","runtime":44,"phase":"Phase Two"},
        {"id":42,"title":"Agents of S.H.I.E.L.D. S01E10: \"The Bridge\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2013-12-10","runtime":44,"phase":"Phase Two"},
        {"id":43,"title":"Agents of S.H.I.E.L.D. S01E11: \"The Magical Place\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-01-07","runtime":44,"phase":"Phase Two"},
        {"id":44,"title":"Agents of S.H.I.E.L.D. S01E12: \"Seeds\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-01-14","runtime":45,"phase":"Phase Two"},
        {"id":45,"title":"Agents of S.H.I.E.L.D. S01E13: \"T.R.A.C.K.S.\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-02-04","runtime":44,"phase":"Phase Two"},
        {"id":46,"title":"Agents of S.H.I.E.L.D. S01E14: \"T.A.H.I.T.I.\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-03-04","runtime":44,"phase":"Phase Two"},
        {"id":47,"title":"Agents of S.H.I.E.L.D. S01E15: \"Yes Men\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-03-11","runtime":44,"phase":"Phase Two"},
        {"id":48,"title":"Agents of S.H.I.E.L.D. S01E16: \"End of the Beginning\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-04-01","runtime":45,"phase":"Phase Two"},
        {"id":49,"title":"Captain America: The Winter Soldier","parentSeries":"Phase Two","type":"Movie","releaseDate":"2014-04-04","runtime":136,"phase":"Phase Two"},
        {"id":50,"title":"Agents of S.H.I.E.L.D. S01E17: \"Turn, Turn, Turn\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-04-08","runtime":44,"phase":"Phase Two"},
        {"id":51,"title":"Agents of S.H.I.E.L.D. S01E18: \"Providence\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-04-15","runtime":44,"phase":"Phase Two"},
        {"id":52,"title":"Agents of S.H.I.E.L.D. S01E19: \"The Only Light in the Darkness\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-04-22","runtime":44,"phase":"Phase Two"},
        {"id":53,"title":"Agents of S.H.I.E.L.D. S01E20: \"Nothing Personal\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-04-29","runtime":43,"phase":"Phase Two"},
        {"id":54,"title":"Agents of S.H.I.E.L.D. S01E21: \"Ragtag\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-05-06","runtime":44,"phase":"Phase Two"},
        {"id":55,"title":"Agents of S.H.I.E.L.D. S01E22: \"Beginning of the End\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-05-13","runtime":44,"phase":"Phase Two"},
        {"id":56,"title":"Guardians of the Galaxy","parentSeries":"Phase Two","type":"Movie","releaseDate":"2014-08-01","runtime":121,"phase":"Phase Two"},
        {"id":57,"title":"I Am Groot S01E01: \"Groot's First Steps\"","parentSeries":"I Am Groot","type":"Short","releaseDate":"2022-08-10","runtime":4,"phase":"Phase Two"},
        {"id":58,"title":"I Am Groot S01E02: \"The Little Guy\"","parentSeries":"I Am Groot","type":"Short","releaseDate":"2022-08-10","runtime":4,"phase":"Phase Two"},
        {"id":59,"title":"I Am Groot S01E03: \"Groot's Pursuit\"","parentSeries":"I Am Groot","type":"Short","releaseDate":"2022-08-10","runtime":4,"phase":"Phase Two"},
        {"id":60,"title":"I Am Groot S01E04: \"Groot Takes a Bath\"","parentSeries":"I Am Groot","type":"Short","releaseDate":"2022-08-10","runtime":4,"phase":"Phase Two"},
        {"id":61,"title":"I Am Groot S01E05: \"Magnum Opus\"","parentSeries":"I Am Groot","type":"Short","releaseDate":"2022-08-10","runtime":4,"phase":"Phase Two"},
        {"id":62,"title":"Guardians of the Galaxy Vol. 2","parentSeries":"Phase Two","type":"Movie","releaseDate":"2017-05-05","runtime":136,"phase":"Phase Two"},
        {"id":63,"title":"I Am Groot S02E01: \"Are You My Groot?\"","parentSeries":"I Am Groot","type":"Short","releaseDate":"2023-09-06","runtime":4,"phase":"Phase Two"},
        {"id":64,"title":"I Am Groot S02E02: \"Groot Noses Around\"","parentSeries":"I Am Groot","type":"Short","releaseDate":"2023-09-06","runtime":4,"phase":"Phase Two"},
        {"id":65,"title":"I Am Groot S02E03: \"Groot's Snow Day\"","parentSeries":"I Am Groot","type":"Short","releaseDate":"2023-09-06","runtime":4,"phase":"Phase Two"},
        {"id":66,"title":"I Am Groot S02E04: \"Groot's Sweet Treat\"","parentSeries":"I Am Groot","type":"Short","releaseDate":"2023-09-06","runtime":4,"phase":"Phase Two"},
        {"id":67,"title":"I Am Groot S02E05: \"Groot and the Great Prophecy\"","parentSeries":"I Am Groot","type":"Short","releaseDate":"2023-09-06","runtime":4,"phase":"Phase Two"},
        {"id":68,"title":"Daredevil S01E01: \"Into the Ring\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":53,"phase":"Phase Two"},
        {"id":69,"title":"Daredevil S01E02: \"Cut Man\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":52,"phase":"Phase Two"},
        {"id":70,"title":"Daredevil S01E03: \"Rabbit in a Snowstorm\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":52,"phase":"Phase Two"},
        {"id":71,"title":"Daredevil S01E04: \"In the Blood\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":55,"phase":"Phase Two"},
        {"id":72,"title":"Daredevil S01E05: \"World on Fire\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":51,"phase":"Phase Two"},
        {"id":73,"title":"Daredevil S01E06: \"Condemned\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":55,"phase":"Phase Two"},
        {"id":74,"title":"Daredevil S01E07: \"Stick\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":50,"phase":"Phase Two"},
        {"id":75,"title":"Daredevil S01E08: \"Shadows in the Glass\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":55,"phase":"Phase Two"},
        {"id":76,"title":"Daredevil S01E09: \"Speak of the Devil\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":51,"phase":"Phase Two"},
        {"id":77,"title":"Daredevil S01E10: \"Nelson v. Murdock\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":58,"phase":"Phase Two"},
        {"id":78,"title":"Daredevil S01E11: \"The Path of the Righteous\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":54,"phase":"Phase Two"},
        {"id":79,"title":"Daredevil S01E12: \"The Ones We Leave Behind\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":50,"phase":"Phase Two"},
        {"id":80,"title":"Daredevil S01E13: \"Daredevil\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2015-04-10","runtime":56,"phase":"Phase Two"},
        {"id":81,"title":"Jessica Jones S01E01: \"AKA Ladies Night\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":53,"phase":"Phase Two"},
        {"id":82,"title":"Jessica Jones S01E02: \"AKA Crush Syndrome\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":51,"phase":"Phase Two"},
        {"id":83,"title":"Jessica Jones S01E03: \"AKA It's Called Whiskey\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":52,"phase":"Phase Two"},
        {"id":84,"title":"Jessica Jones S01E04: \"AKA 99 Friends\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":48,"phase":"Phase Two"},
        {"id":85,"title":"Jessica Jones S01E05: \"AKA The Sandwich Saved Me\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":51,"phase":"Phase Two"},
        {"id":86,"title":"Jessica Jones S01E06: \"AKA You're a Winner!\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":52,"phase":"Phase Two"},
        {"id":87,"title":"Jessica Jones S01E07: \"AKA Top Shelf Perverts\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":52,"phase":"Phase Two"},
        {"id":88,"title":"Jessica Jones S01E08: \"AKA WWJD?\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":55,"phase":"Phase Two"},
        {"id":89,"title":"Jessica Jones S01E09: \"AKA Sin Bin\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":50,"phase":"Phase Two"},
        {"id":90,"title":"Jessica Jones S01E10: \"AKA 1,000 Cuts\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":47,"phase":"Phase Two"},
        {"id":91,"title":"Jessica Jones S01E11: \"AKA I've Got the Blues\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":53,"phase":"Phase Two"},
        {"id":92,"title":"Jessica Jones S01E12: \"AKA Take a Bloody Number\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":52,"phase":"Phase Two"},
        {"id":93,"title":"Jessica Jones S01E13: \"AKA Smile\"","parentSeries":"Jessica Jones","type":"TV Episode","releaseDate":"2015-11-20","runtime":54,"phase":"Phase Two"},
        {"id":94,"title":"Agents of S.H.I.E.L.D. S02E01: \"Shadows\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-09-23","runtime":44,"phase":"Phase Two"},
        {"id":95,"title":"Agents of S.H.I.E.L.D. S02E02: \"Heavy Is the Head\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-09-30","runtime":42,"phase":"Phase Two"},
        {"id":96,"title":"Agents of S.H.I.E.L.D. S02E03: \"Making Friends and Influencing People\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-10-07","runtime":44,"phase":"Phase Two"},
        {"id":97,"title":"Agents of S.H.I.E.L.D. S02E04: \"Face My Enemy\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-10-14","runtime":44,"phase":"Phase Two"},
        {"id":98,"title":"Agents of S.H.I.E.L.D. S02E05: \"A Hen in the Wolf House\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-10-21","runtime":43,"phase":"Phase Two"},
        {"id":99,"title":"Agents of S.H.I.E.L.D. S02E06: \"A Fractured House\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-10-28","runtime":43,"phase":"Phase Two"},
        {"id":100,"title":"Agents of S.H.I.E.L.D. S02E07: \"The Writing on the Wall\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-11-11","runtime":44,"phase":"Phase Two"},
        {"id":101,"title":"Agents of S.H.I.E.L.D. S02E08: \"The Things We Bury\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-11-18","runtime":44,"phase":"Phase Two"},
        {"id":102,"title":"Agents of S.H.I.E.L.D. S02E09: \"...Ye Who Enter Here\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-12-02","runtime":44,"phase":"Phase Two"},
        {"id":103,"title":"Agents of S.H.I.E.L.D. S02E10: \"What They Become\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2014-12-09","runtime":44,"phase":"Phase Two"},
        {"id":104,"title":"Agents of S.H.I.E.L.D. S02E11: \"Aftershocks\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-03-03","runtime":44,"phase":"Phase Two"},
        {"id":105,"title":"Agents of S.H.I.E.L.D. S02E12: \"Who You Really Are\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-03-10","runtime":44,"phase":"Phase Two"},
        {"id":106,"title":"Agents of S.H.I.E.L.D. S02E13: \"One of Us\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-03-17","runtime":44,"phase":"Phase Two"},
        {"id":107,"title":"Agents of S.H.I.E.L.D. S02E14: \"Love in the Time of Hydra\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-03-24","runtime":44,"phase":"Phase Two"},
        {"id":108,"title":"Agents of S.H.I.E.L.D. S02E15: \"One Door Closes\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-03-31","runtime":44,"phase":"Phase Two"},
        {"id":109,"title":"Agents of S.H.I.E.L.D. S02E16: \"Afterlife\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-04-07","runtime":43,"phase":"Phase Two"},
        {"id":110,"title":"Agents of S.H.I.E.L.D. S02E17: \"Melinda\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-04-14","runtime":44,"phase":"Phase Two"},
        {"id":111,"title":"Agents of S.H.I.E.L.D. S02E18: \"The Frenemy of My Enemy\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-04-21","runtime":44,"phase":"Phase Two"},
        {"id":112,"title":"Agents of S.H.I.E.L.D. S02E19: \"The Dirty Half Dozen\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-04-28","runtime":43,"phase":"Phase Two"},
        {"id":113,"title":"Avengers: Age of Ultron","parentSeries":"Phase Two","type":"Movie","releaseDate":"2015-05-01","runtime":141,"phase":"Phase Two"},
        {"id":114,"title":"Agents of S.H.I.E.L.D. S02E20: \"Scars\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-05-05","runtime":44,"phase":"Phase Two"},
        {"id":115,"title":"Agents of S.H.I.E.L.D. S02E21: \"S.O.S., Part 1\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-05-12","runtime":44,"phase":"Phase Two"},
        {"id":116,"title":"Agents of S.H.I.E.L.D. S02E22: \"S.O.S., Part 2\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-05-12","runtime":43,"phase":"Phase Two"},
        {"id":117,"title":"Ant-Man","parentSeries":"Phase Two","type":"Movie","releaseDate":"2015-07-17","runtime":117,"phase":"Phase Two"},
        {"id":118,"title":"Agents of S.H.I.E.L.D. S03E01: \"Laws of Nature\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-09-29","runtime":44,"phase":"Phase Three"},
        {"id":119,"title":"Agents of S.H.I.E.L.D. S03E02: \"Purpose in the Machine\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-10-06","runtime":42,"phase":"Phase Three"},
        {"id":120,"title":"Agents of S.H.I.E.L.D. S03E03: \"A Wanted (Inhu)man\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-10-13","runtime":43,"phase":"Phase Three"},
        {"id":121,"title":"Agents of S.H.I.E.L.D. S03E04: \"Devils You Know\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-10-20","runtime":43,"phase":"Phase Three"},
        {"id":122,"title":"Agents of S.H.I.E.L.D. S03E05: \"4,722 Hours\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-10-27","runtime":43,"phase":"Phase Three"},
        {"id":123,"title":"Agents of S.H.I.E.L.D. S03E06: \"Among Us Hide...\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-11-03","runtime":43,"phase":"Phase Three"},
        {"id":124,"title":"Agents of S.H.I.E.L.D. S03E07: \"Chaos Theory\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-11-10","runtime":43,"phase":"Phase Three"},
        {"id":125,"title":"Agents of S.H.I.E.L.D. S03E08: \"Many Heads, One Tale\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-11-17","runtime":43,"phase":"Phase Three"},
        {"id":126,"title":"Agents of S.H.I.E.L.D. S03E09: \"Closure\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-12-01","runtime":43,"phase":"Phase Three"},
        {"id":127,"title":"Agents of S.H.I.E.L.D. S03E10: \"Maveth\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2015-12-08","runtime":43,"phase":"Phase Three"},
        {"id":128,"title":"Daredevil S02E01: \"Bang\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":53,"phase":"Phase Three"},
        {"id":129,"title":"Daredevil S02E02: \"Dogs to a Gunfight\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":53,"phase":"Phase Three"},
        {"id":130,"title":"Daredevil S02E03: \"New York's Finest\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":53,"phase":"Phase Three"},
        {"id":131,"title":"Daredevil S02E04: \"Penny and Dime\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":59,"phase":"Phase Three"},
        {"id":132,"title":"Daredevil S02E05: \"Kinbaku\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":50,"phase":"Phase Three"},
        {"id":133,"title":"Daredevil S02E06: \"Regrets Only\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":53,"phase":"Phase Three"},
        {"id":134,"title":"Daredevil S02E07: \"Semper Fidelis\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":53,"phase":"Phase Three"},
        {"id":135,"title":"Daredevil S02E08: \"Guilty as Sin\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":52,"phase":"Phase Three"},
        {"id":136,"title":"Daredevil S02E09: \"Seven Minutes in Heaven\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":53,"phase":"Phase Three"},
        {"id":137,"title":"Daredevil S02E10: \"The Man in the Box\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":54,"phase":"Phase Three"},
        {"id":138,"title":"Daredevil S02E11: \"380\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":49,"phase":"Phase Three"},
        {"id":139,"title":"Daredevil S02E12: \"The Dark at the End of the Tunnel\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":53,"phase":"Phase Three"},
        {"id":140,"title":"Daredevil S02E13: \"A Cold Day in Hell's Kitchen\"","parentSeries":"Daredevil","type":"TV Episode","releaseDate":"2016-03-18","runtime":54,"phase":"Phase Three"},
        {"id":141,"title":"Luke Cage S01E01: \"Moment of Truth\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":57,"phase":"Phase Three"},
        {"id":142,"title":"Luke Cage S01E02: \"Code of the Streets\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":56,"phase":"Phase Three"},
        {"id":143,"title":"Luke Cage S01E03: \"Who's Gonna Take the Weight?\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":54,"phase":"Phase Three"},
        {"id":144,"title":"Luke Cage S01E04: \"Step in the Arena\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":59,"phase":"Phase Three"},
        {"id":145,"title":"Luke Cage S01E05: \"Just to Get a Rep\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":56,"phase":"Phase Three"},
        {"id":146,"title":"Luke Cage S01E06: \"Suckas Need Bodyguards\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":52,"phase":"Phase Three"},
        {"id":147,"title":"Luke Cage S01E07: \"Manifest\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":59,"phase":"Phase Three"},
        {"id":148,"title":"Luke Cage S01E08: \"Blowin' Up the Spot\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":54,"phase":"Phase Three"},
        {"id":149,"title":"Luke Cage S01E09: \"DWYCK\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":55,"phase":"Phase Three"},
        {"id":150,"title":"Luke Cage S01E10: \"Take It Personal\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":48,"phase":"Phase Three"},
        {"id":151,"title":"Luke Cage S01E11: \"Now You're Mine\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":62,"phase":"Phase Three"},
        {"id":152,"title":"Luke Cage S01E12: \"Soliloquy of Chaos\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":55,"phase":"Phase Three"},
        {"id":153,"title":"Luke Cage S01E13: \"You Know My Steez\"","parentSeries":"Luke Cage","type":"TV Episode","releaseDate":"2016-09-30","runtime":62,"phase":"Phase Three"},
        {"id":154,"title":"Agents of S.H.I.E.L.D. S03E11: \"Bouncing Back\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-03-08","runtime":43,"phase":"Phase Three"},
        {"id":155,"title":"Agents of S.H.I.E.L.D. S03E12: \"The Inside Man\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-03-15","runtime":43,"phase":"Phase Three"},
        {"id":156,"title":"Agents of S.H.I.E.L.D. S03E13: \"Parting Shot\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-03-22","runtime":43,"phase":"Phase Three"},
        {"id":157,"title":"Agents of S.H.I.E.L.D. S03E14: \"Watchdogs\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-03-29","runtime":43,"phase":"Phase Three"},
        {"id":158,"title":"Agents of S.H.I.E.L.D. S03E15: \"Spacetime\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-04-05","runtime":43,"phase":"Phase Three"},
        {"id":159,"title":"Agents of S.H.I.E.L.D. S03E16: \"Paradise Lost\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-04-12","runtime":43,"phase":"Phase Three"},
        {"id":160,"title":"Agents of S.H.I.E.L.D. S03E17: \"The Team\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-04-19","runtime":42,"phase":"Phase Three"},
        {"id":161,"title":"Agents of S.H.I.E.L.D. S03E18: \"The Singularity\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-04-26","runtime":43,"phase":"Phase Three"},
        {"id":162,"title":"Agents of S.H.I.E.L.D. S03E19: \"Failed Experiments\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-05-03","runtime":43,"phase":"Phase Three"},
        {"id":163,"title":"Captain America: Civil War","parentSeries":"Phase Three","type":"Movie","releaseDate":"2016-05-06","runtime":147,"phase":"Phase Three"},
        {"id":164,"title":"Agents of S.H.I.E.L.D. S03E20: \"Emancipation\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-05-10","runtime":43,"phase":"Phase Three"},
        {"id":165,"title":"Agents of S.H.I.E.L.D. S03E21: \"Absolution\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-05-17","runtime":43,"phase":"Phase Three"},
        {"id":166,"title":"Agents of S.H.I.E.L.D. S03E22: \"Ascension\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-05-17","runtime":42,"phase":"Phase Three"},
        {"id":167,"title":"Black Widow","parentSeries":"Phase Three","type":"Movie","releaseDate":"2021-07-09","runtime":134,"phase":"Phase Three"},
        {"id":168,"title":"Black Panther","parentSeries":"Phase Three","type":"Movie","releaseDate":"2018-02-16","runtime":134,"phase":"Phase Three"},
        {"id":169,"title":"Spider-Man: Homecoming","parentSeries":"Phase Three","type":"Movie","releaseDate":"2017-07-07","runtime":133,"phase":"Phase Three"},
        {"id":170,"title":"Doctor Strange","parentSeries":"Phase Three","type":"Movie","releaseDate":"2016-11-04","runtime":115,"phase":"Phase Three"},
        {"id":171,"title":"Agents of S.H.I.E.L.D. S04E01: \"The Ghost\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-09-20","runtime":43,"phase":"Phase Three"},
        {"id":172,"title":"Agents of S.H.I.E.L.D. S04E02: \"Meet the New Boss\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-09-27","runtime":43,"phase":"Phase Three"},
        {"id":173,"title":"Agents of S.H.I.E.L.D. S04E03: \"Uprising\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-10-11","runtime":42,"phase":"Phase Three"},
        {"id":174,"title":"Agents of S.H.I.E.L.D. S04E04: \"Let Me Stand Next to Your Fire\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-10-18","runtime":43,"phase":"Phase Three"},
        {"id":175,"title":"Agents of S.H.I.E.L.D. S04E05: \"Lockup\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-10-25","runtime":43,"phase":"Phase Three"},
        {"id":176,"title":"Agents of S.H.I.E.L.D. S04E06: \"The Good Samaritan\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-11-01","runtime":43,"phase":"Phase Three"},
        {"id":177,"title":"Agents of S.H.I.E.L.D. S04E07: \"Deals with Our Devils\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-11-29","runtime":43,"phase":"Phase Three"},
        {"id":178,"title":"Agents of S.H.I.E.L.D. S04E08: \"The Laws of Inferno Dynamics\"","parentSeries":"Agents of S.H.I.E.L.D.","type":"TV Episode","releaseDate":"2016-12-06","runtime":43,"phase":"Phase Three"},
        {"id":179,"title":"Iron Fist S01E01: \"Snow Gives Way\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":58,"phase":"Phase Three"},
        {"id":180,"title":"Iron Fist S01E02: \"Shadow Hawk Takes Flight\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":59,"phase":"Phase Three"},
        {"id":181,"title":"Iron Fist S01E03: \"Rolling Thunder Cannon Punch\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":56,"phase":"Phase Three"},
        {"id":182,"title":"Iron Fist S01E04: \"Eight Diagram Dragon Palm\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":55,"phase":"Phase Three"},
        {"id":183,"title":"Iron Fist S01E05: \"Under Leaf Pluck Lotus\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":52,"phase":"Phase Three"},
        {"id":184,"title":"Iron Fist S01E06: \"Immortal Emerges from Cave\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":55,"phase":"Phase Three"},
        {"id":185,"title":"Iron Fist S01E07: \"Felling Tree with Roots\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":56,"phase":"Phase Three"},
        {"id":186,"title":"Iron Fist S01E08: \"The Blessing of Many Fractures\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":53,"phase":"Phase Three"},
        {"id":187,"title":"Iron Fist S01E09: \"The Mistress of All Agonies\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":52,"phase":"Phase Three"},
        {"id":188,"title":"Iron Fist S01E10: \"Black Tiger Steals Heart\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":51,"phase":"Phase Three"},
        {"id":189,"title":"Iron Fist S01E11: \"Lead Horse Back to Stable\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":52,"phase":"Phase Three"},
        {"id":190,"title":"Iron Fist S01E12: \"Bar the Big Boss\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":51,"phase":"Phase Three"},
        {"id":191,"title":"Iron Fist S01E13: \"Dragon Plays with Fire\"","parentSeries":"Iron Fist","type":"TV Episode","releaseDate":"2017-03-17","runtime":57,"phase":"Phase Three"},
        {"id":192,"title":"The Defenders S01E01: \"The H Word\"","parentSeries":"The Defenders","type":"TV Episode","releaseDate":"2017-08-18","runtime":51,"phase":"Phase Three"},
        {"id":193,"title":"The Defenders S01E02: \"Mean Right Hook\"","parentSeries":"The Defenders","type":"TV Episode","releaseDate":"2017-08-18","runtime":47,"phase":"Phase Three"},
        {"id":194,"title":"The Defenders S01E03: \"Worst Behavior\"","parentSeries":"The Defenders","type":"TV Episode","releaseDate":"2017-08-18","runtime":53,"phase":"Phase Three"},
        {"id":195,"title":"The Defenders S01E04: \"Royal Dragon\"","parentSeries":"The Defenders","type":"TV Episode","releaseDate":"2017-08-18","runtime":45,"phase":"Phase Three"},
        {"id":196,"title":"The Defenders S01E05: \"Take Shelter\"","parentSeries":"The Defenders","type":"TV Episode","releaseDate":"2017-08-18","runtime":47,"phase":"Phase Three"},
        {"id":197,"title":"The Defenders S01E06: \"Ashes, Ashes\"","parentSeries":"The Defenders","type":"TV Episode","releaseDate":"2017-08-18","runtime":50,"phase":"Phase Three"},
        {"id":198,"title":"The Defenders S01E07: \"Fish in the Jailhouse\"","parentSeries":"The Defenders","type":"TV Episode","releaseDate":"2017-08-18","runtime":44,"phase":"Phase Three"},
        {"id":199,"title":"The Defenders S01E08: \"The Defenders\"","parentSeries":"The Defenders","type":"TV Episode","releaseDate":"2017-08-18","runtime":53,"phase":"Phase Three"},
        {"id":200,"title":"Thor: Ragnarok","parentSeries":"Phase Three","type":"Movie","releaseDate":"2017-11-03","runtime":130,"phase":"Phase Three"},
        {"id":201,"title":"The Punisher S01E01: \"3AM\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":52,"phase":"Phase Three"},
        {"id":202,"title":"The Punisher S01E02: \"Two Dead Men\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":54,"phase":"Phase Three"},
        {"id":203,"title":"The Punisher S01E03: \"Kandahar\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":51,"phase":"Phase Three"},
        {"id":204,"title":"The Punisher S01E04: \"Resupply\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":52,"phase":"Phase Three"},
        {"id":205,"title":"The Punisher S01E05: \"Gunner\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":55,"phase":"Phase Three"},
        {"id":206,"title":"The Punisher S01E06: \"The Judas Goat\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":53,"phase":"Phase Three"},
        {"id":207,"title":"The Punisher S01E07: \"Crosshairs\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":50,"phase":"Phase Three"},
        {"id":208,"title":"The Punisher S01E08: \"Cold Steel\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":55,"phase":"Phase Three"},
        {"id":209,"title":"The Punisher S01E09: \"Front Toward Enemy\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":48,"phase":"Phase Three"},
        {"id":210,"title":"The Punisher S01E10: \"Virtue of the Vicious\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":50,"phase":"Phase Three"},
        {"id":211,"title":"The Punisher S01E11: \"Danger Close\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":53,"phase":"Phase Three"},
        {"id":212,"title":"The Punisher S01E12: \"Home\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":52,"phase":"Phase Three"},
        {"id":213,"title":"The Punisher S01E13: \"Memento Mori\"","parentSeries":"The Punisher","type":"TV Episode","releaseDate":"2017-11-17","runtime":53,"phase":"Phase Three"},
        {"id":214,"title":"Ant-Man and the Wasp","parentSeries":"Phase Three","type":"Movie","releaseDate":"2018-07-06","runtime":118,"phase":"Phase Three"},
        {"id":215,"title":"Avengers: Infinity War","parentSeries":"Phase Three","type":"Movie","releaseDate":"2018-04-27","runtime":149,"phase":"Phase Three"},
        {"id":216,"title":"Avengers: Endgame","parentSeries":"Phase Three","type":"Movie","releaseDate":"2019-04-26","runtime":181,"phase":"Phase Three"},
        {"id":217,"title":"Loki S01E01: \"Glorious Purpose\"","parentSeries":"Loki","type":"TV Episode","releaseDate":"2021-06-09","runtime":51,"phase":"Multiverse Saga"},
        {"id":218,"title":"Loki S01E02: \"The Variant\"","parentSeries":"Loki","type":"TV Episode","releaseDate":"2021-06-16","runtime":54,"phase":"Multiverse Saga"},
        {"id":219,"title":"Loki S01E03: \"Lamentis\"","parentSeries":"Loki","type":"TV Episode","releaseDate":"2021-06-23","runtime":42,"phase":"Multiverse Saga"},
        {"id":220,"title":"Loki S01E04: \"The Nexus Event\"","parentSeries":"Loki","type":"TV Episode","releaseDate":"2021-06-30","runtime":49,"phase":"Multiverse Saga"},
        {"id":221,"title":"Loki S01E05: \"Journey into Mystery\"","parentSeries":"Loki","type":"TV Episode","releaseDate":"2021-07-07","runtime":51,"phase":"Multiverse Saga"},
        {"id":222,"title":"Loki S01E06: \"For All Time. Always.\"","parentSeries":"Loki","type":"TV Episode","releaseDate":"2021-07-14","runtime":46,"phase":"Multiverse Saga"},
        {"id":223,"title":"Loki S02E01: \"Ouroboros\"","parentSeries":"Loki","type":"TV Episode","releaseDate":"2023-10-05","runtime":46,"phase":"Multiverse Saga"},
        {"id":224,"title":"Loki S02E02: \"Breaking Brad\"","parentSeries":"Loki","type":"TV Episode","releaseDate":"2023-10-12","runtime":49,"phase":"Multiverse Saga"},
        {"id":225,"title":"Loki S02E03: \"1893\"","parentSeries":"Loki","type":"TV Episode","releaseDate":"2023-10-19","runtime":54,"phase":"Multiverse Saga"},
        {"id":226,"title":"Loki S02E04: \"Heart of the TVA\"","parentSeries":"Loki","type":"TV Episode","releaseDate":"2023-10-26","runtime":49,"phase":"Multiverse Saga"},
        {"id":227,"title":"Loki S02E05: \"Science/Fiction\"","parentSeries":"Loki","type":"TV Episode","releaseDate":"2023-11-02","runtime":50,"phase":"Multiverse Saga"},
        {"id":228,"title":"Loki S02E06: \"Glorious Purpose\"","parentSeries":"Loki","type":"TV Episode","releaseDate":"2023-11-09","runtime":56,"phase":"Multiverse Saga"},
        {"id":229,"title":"What If...? S01E01: \"What If... Captain Carter Were the First Avenger?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2021-08-11","runtime":32,"phase":"Multiverse Saga"},
        {"id":230,"title":"What If...? S01E02: \"What If... T'Challa Became a Star-Lord?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2021-08-18","runtime":32,"phase":"Multiverse Saga"},
        {"id":231,"title":"What If...? S01E03: \"What If... the World Lost Its Mightiest Heroes?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2021-08-25","runtime":31,"phase":"Multiverse Saga"},
        {"id":232,"title":"What If...? S01E04: \"What If... Doctor Strange Lost His Heart Instead of His Hands?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2021-09-01","runtime":35,"phase":"Multiverse Saga"},
        {"id":233,"title":"What If...? S01E05: \"What If... Zombies?!\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2021-09-08","runtime":31,"phase":"Multiverse Saga"},
        {"id":234,"title":"What If...? S01E06: \"What If... Killmonger Rescued Tony Stark?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2021-09-15","runtime":31,"phase":"Multiverse Saga"},
        {"id":235,"title":"What If...? S01E07: \"What If... Thor Were an Only Child?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2021-09-22","runtime":33,"phase":"Multiverse Saga"},
        {"id":236,"title":"What If...? S01E08: \"What If... Ultron Won?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2021-09-29","runtime":31,"phase":"Multiverse Saga"},
        {"id":237,"title":"What If...? S01E09: \"What If... the Watcher Broke His Oath?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2021-10-06","runtime":33,"phase":"Multiverse Saga"},
        {"id":238,"title":"WandaVision S01E01: \"Filmed Before a Live Studio Audience\"","parentSeries":"WandaVision","type":"TV Episode","releaseDate":"2021-01-15","runtime":29,"phase":"Multiverse Saga"},
        {"id":239,"title":"WandaVision S01E02: \"Don't Touch That Dial\"","parentSeries":"WandaVision","type":"TV Episode","releaseDate":"2021-01-15","runtime":37,"phase":"Multiverse Saga"},
        {"id":240,"title":"WandaVision S01E03: \"Now in Color\"","parentSeries":"WandaVision","type":"TV Episode","releaseDate":"2021-01-22","runtime":33,"phase":"Multiverse Saga"},
        {"id":241,"title":"WandaVision S01E04: \"We Interrupt This Program\"","parentSeries":"WandaVision","type":"TV Episode","releaseDate":"2021-01-29","runtime":35,"phase":"Multiverse Saga"},
        {"id":242,"title":"WandaVision S01E05: \"On a Very Special Episode...\"","parentSeries":"WandaVision","type":"TV Episode","releaseDate":"2021-02-05","runtime":41,"phase":"Multiverse Saga"},
        {"id":243,"title":"WandaVision S01E06: \"All-New Halloween Spooktacular!\"","parentSeries":"WandaVision","type":"TV Episode","releaseDate":"2021-02-12","runtime":38,"phase":"Multiverse Saga"},
        {"id":244,"title":"WandaVision S01E07: \"Breaking the Fourth Wall\"","parentSeries":"WandaVision","type":"TV Episode","releaseDate":"2021-02-19","runtime":37,"phase":"Multiverse Saga"},
        {"id":245,"title":"WandaVision S01E08: \"Previously On\"","parentSeries":"WandaVision","type":"TV Episode","releaseDate":"2021-02-26","runtime":46,"phase":"Multiverse Saga"},
        {"id":246,"title":"WandaVision S01E09: \"The Series Finale\"","parentSeries":"WandaVision","type":"TV Episode","releaseDate":"2021-03-05","runtime":50,"phase":"Multiverse Saga"},
        {"id":247,"title":"The Falcon and the Winter Soldier S01E01: \"New World Order\"","parentSeries":"The Falcon and the Winter Soldier","type":"TV Episode","releaseDate":"2021-03-19","runtime":50,"phase":"Multiverse Saga"},
        {"id":248,"title":"The Falcon and the Winter Soldier S01E02: \"The Star-Spangled Man\"","parentSeries":"The Falcon and the Winter Soldier","type":"TV Episode","releaseDate":"2021-03-26","runtime":50,"phase":"Multiverse Saga"},
        {"id":249,"title":"The Falcon and the Winter Soldier S01E03: \"Power Broker\"","parentSeries":"The Falcon and the Winter Soldier","type":"TV Episode","releaseDate":"2021-04-02","runtime":54,"phase":"Multiverse Saga"},
        {"id":250,"title":"The Falcon and the Winter Soldier S01E04: \"The Whole World Is Watching\"","parentSeries":"The Falcon and the Winter Soldier","type":"TV Episode","releaseDate":"2021-04-09","runtime":54,"phase":"Multiverse Saga"},
        {"id":251,"title":"The Falcon and the Winter Soldier S01E05: \"Truth\"","parentSeries":"The Falcon and the Winter Soldier","type":"TV Episode","releaseDate":"2021-04-16","runtime":61,"phase":"Multiverse Saga"},
        {"id":252,"title":"The Falcon and the Winter Soldier S01E06: \"One World, One People\"","parentSeries":"The Falcon and the Winter Soldier","type":"TV Episode","releaseDate":"2021-04-23","runtime":51,"phase":"Multiverse Saga"},
        {"id":253,"title":"Shang-Chi and the Legend of the Ten Rings","parentSeries":"Multiverse Saga","type":"Movie","releaseDate":"2021-09-03","runtime":132,"phase":"Multiverse Saga"},
        {"id":254,"title":"Eternals","parentSeries":"Multiverse Saga","type":"Movie","releaseDate":"2021-11-05","runtime":156,"phase":"Multiverse Saga"},
        {"id":255,"title":"Spider-Man: Far From Home","parentSeries":"Multiverse Saga","type":"Movie","releaseDate":"2019-07-02","runtime":129,"phase":"Multiverse Saga"},
        {"id":256,"title":"Spider-Man: No Way Home","parentSeries":"Multiverse Saga","type":"Movie","releaseDate":"2021-12-17","runtime":148,"phase":"Multiverse Saga"},
        {"id":257,"title":"Doctor Strange in the Multiverse of Madness","parentSeries":"Multiverse Saga","type":"Movie","releaseDate":"2022-05-06","runtime":126,"phase":"Multiverse Saga"},
        {"id":258,"title":"Hawkeye S01E01: \"Never Meet Your Heroes\"","parentSeries":"Hawkeye","type":"TV Episode","releaseDate":"2021-11-24","runtime":47,"phase":"Multiverse Saga"},
        {"id":259,"title":"Hawkeye S01E02: \"Hide and Seek\"","parentSeries":"Hawkeye","type":"TV Episode","releaseDate":"2021-11-24","runtime":49,"phase":"Multiverse Saga"},
        {"id":260,"title":"Hawkeye S01E03: \"Echoes\"","parentSeries":"Hawkeye","type":"TV Episode","releaseDate":"2021-12-01","runtime":43,"phase":"Multiverse Saga"},
        {"id":261,"title":"Hawkeye S01E04: \"Partners, Am I Right?\"","parentSeries":"Hawkeye","type":"TV Episode","releaseDate":"2021-12-08","runtime":41,"phase":"Multiverse Saga"},
        {"id":262,"title":"Hawkeye S01E05: \"Ronin\"","parentSeries":"Hawkeye","type":"TV Episode","releaseDate":"2021-12-15","runtime":45,"phase":"Multiverse Saga"},
        {"id":263,"title":"Hawkeye S01E06: \"So This Is Christmas?\"","parentSeries":"Hawkeye","type":"TV Episode","releaseDate":"2021-12-22","runtime":61,"phase":"Multiverse Saga"},
        {"id":264,"title":"Moon Knight S01E01: \"The Goldfish Problem\"","parentSeries":"Moon Knight","type":"TV Episode","releaseDate":"2022-03-30","runtime":47,"phase":"Multiverse Saga"},
        {"id":265,"title":"Moon Knight S01E02: \"Summon the Suit\"","parentSeries":"Moon Knight","type":"TV Episode","releaseDate":"2022-04-06","runtime":52,"phase":"Multiverse Saga"},
        {"id":266,"title":"Moon Knight S01E03: \"The Friendly Type\"","parentSeries":"Moon Knight","type":"TV Episode","releaseDate":"2022-04-13","runtime":50,"phase":"Multiverse Saga"},
        {"id":267,"title":"Moon Knight S01E04: \"The Tomb\"","parentSeries":"Moon Knight","type":"TV Episode","releaseDate":"2022-04-20","runtime":52,"phase":"Multiverse Saga"},
        {"id":268,"title":"Moon Knight S01E05: \"Asylum\"","parentSeries":"Moon Knight","type":"TV Episode","releaseDate":"2022-04-27","runtime":47,"phase":"Multiverse Saga"},
        {"id":269,"title":"Moon Knight S01E06: \"Gods and Monsters\"","parentSeries":"Moon Knight","type":"TV Episode","releaseDate":"2022-05-04","runtime":44,"phase":"Multiverse Saga"},
        {"id":270,"title":"Black Panther: Wakanda Forever","parentSeries":"Multiverse Saga","type":"Movie","releaseDate":"2022-11-11","runtime":161,"phase":"Multiverse Saga"},
        {"id":271,"title":"Echo S01E01: \"Chafa\"","parentSeries":"Echo","type":"TV Episode","releaseDate":"2024-01-09","runtime":48,"phase":"Multiverse Saga"},
        {"id":272,"title":"Echo S01E02: \"Lowak\"","parentSeries":"Echo","type":"TV Episode","releaseDate":"2024-01-09","runtime":39,"phase":"Multiverse Saga"},
        {"id":273,"title":"Echo S01E03: \"Tuklo\"","parentSeries":"Echo","type":"TV Episode","releaseDate":"2024-01-09","runtime":42,"phase":"Multiverse Saga"},
        {"id":274,"title":"Echo S01E04: \"Taloa\"","parentSeries":"Echo","type":"TV Episode","releaseDate":"2024-01-09","runtime":37,"phase":"Multiverse Saga"},
        {"id":275,"title":"Echo S01E05: \"Maya\"","parentSeries":"Echo","type":"TV Episode","releaseDate":"2024-01-09","runtime":39,"phase":"Multiverse Saga"},
        {"id":276,"title":"She-Hulk: Attorney at Law S01E01: \"A Normal Amount of Rage\"","parentSeries":"She-Hulk: Attorney at Law","type":"TV Episode","releaseDate":"2022-08-18","runtime":35,"phase":"Multiverse Saga"},
        {"id":277,"title":"She-Hulk: Attorney at Law S01E02: \"Superhuman Law\"","parentSeries":"She-Hulk: Attorney at Law","type":"TV Episode","releaseDate":"2022-08-25","runtime":28,"phase":"Multiverse Saga"},
        {"id":278,"title":"She-Hulk: Attorney at Law S01E03: \"The People vs. Emil Blonsky\"","parentSeries":"She-Hulk: Attorney at Law","type":"TV Episode","releaseDate":"2022-09-01","runtime":32,"phase":"Multiverse Saga"},
        {"id":279,"title":"She-Hulk: Attorney at Law S01E04: \"Is This Not Real Magic?\"","parentSeries":"She-Hulk: Attorney at Law","type":"TV Episode","releaseDate":"2022-09-08","runtime":33,"phase":"Multiverse Saga"},
        {"id":280,"title":"She-Hulk: Attorney at Law S01E05: \"Mean, Green, and Straight Poured into These Jeans\"","parentSeries":"She-Hulk: Attorney at Law","type":"TV Episode","releaseDate":"2022-09-15","runtime":30,"phase":"Multiverse Saga"},
        {"id":281,"title":"She-Hulk: Attorney at Law S01E06: \"Just Jen\"","parentSeries":"She-Hulk: Attorney at Law","type":"TV Episode","releaseDate":"2022-09-22","runtime":29,"phase":"Multiverse Saga"},
        {"id":282,"title":"She-Hulk: Attorney at Law S01E07: \"The Retreat\"","parentSeries":"She-Hulk: Attorney at Law","type":"TV Episode","releaseDate":"2022-09-29","runtime":32,"phase":"Multiverse Saga"},
        {"id":283,"title":"She-Hulk: Attorney at Law S01E08: \"Ribbit and Rip It\"","parentSeries":"She-Hulk: Attorney at Law","type":"TV Episode","releaseDate":"2022-10-06","runtime":33,"phase":"Multiverse Saga"},
        {"id":284,"title":"She-Hulk: Attorney at Law S01E09: \"Whose Show Is This?\"","parentSeries":"She-Hulk: Attorney at Law","type":"TV Episode","releaseDate":"2022-10-13","runtime":35,"phase":"Multiverse Saga"},
        {"id":285,"title":"Ms. Marvel S01E01: \"Generation Why\"","parentSeries":"Ms. Marvel","type":"TV Episode","releaseDate":"2022-06-08","runtime":47,"phase":"Multiverse Saga"},
        {"id":286,"title":"Ms. Marvel S01E02: \"Crushed\"","parentSeries":"Ms. Marvel","type":"TV Episode","releaseDate":"2022-06-15","runtime":49,"phase":"Multiverse Saga"},
        {"id":287,"title":"Ms. Marvel S01E03: \"Destined\"","parentSeries":"Ms. Marvel","type":"TV Episode","releaseDate":"2022-06-22","runtime":42,"phase":"Multiverse Saga"},
        {"id":288,"title":"Ms. Marvel S01E04: \"Seeing Red\"","parentSeries":"Ms. Marvel","type":"TV Episode","releaseDate":"2022-06-29","runtime":40,"phase":"Multiverse Saga"},
        {"id":289,"title":"Ms. Marvel S01E05: \"Time and Again\"","parentSeries":"Ms. Marvel","type":"TV Episode","releaseDate":"2022-07-06","runtime":39,"phase":"Multiverse Saga"},
        {"id":290,"title":"Ms. Marvel S01E06: \"No Normal\"","parentSeries":"Ms. Marvel","type":"TV Episode","releaseDate":"2022-07-13","runtime":47,"phase":"Multiverse Saga"},
        {"id":291,"title":"Thor: Love and Thunder","parentSeries":"Multiverse Saga","type":"Movie","releaseDate":"2022-07-08","runtime":119,"phase":"Multiverse Saga"},
        {"id":292,"title":"Werewolf by Night","parentSeries":"Multiverse Saga","type":"Special","releaseDate":"2022-10-07","runtime":53,"phase":"Multiverse Saga"},
        {"id":293,"title":"The Guardians of the Galaxy Holiday Special","parentSeries":"Multiverse Saga","type":"Special","releaseDate":"2022-11-25","runtime":44,"phase":"Multiverse Saga"},
        {"id":294,"title":"Ant-Man and the Wasp: Quantumania","parentSeries":"Multiverse Saga","type":"Movie","releaseDate":"2023-02-17","runtime":124,"phase":"Multiverse Saga"},
        {"id":295,"title":"Guardians of the Galaxy Vol. 3","parentSeries":"Multiverse Saga","type":"Movie","releaseDate":"2023-05-05","runtime":150,"phase":"Multiverse Saga"},
        {"id":296,"title":"Secret Invasion S01E01: \"Resurrection\"","parentSeries":"Secret Invasion","type":"TV Episode","releaseDate":"2023-06-21","runtime":55,"phase":"Multiverse Saga"},
        {"id":297,"title":"Secret Invasion S01E02: \"Promises\"","parentSeries":"Secret Invasion","type":"TV Episode","releaseDate":"2023-06-28","runtime":58,"phase":"Multiverse Saga"},
        {"id":298,"title":"Secret Invasion S01E03: \"Betrayed\"","parentSeries":"Secret Invasion","type":"TV Episode","releaseDate":"2023-07-05","runtime":44,"phase":"Multiverse Saga"},
        {"id":299,"title":"Secret Invasion S01E04: \"Beloved\"","parentSeries":"Secret Invasion","type":"TV Episode","releaseDate":"2023-07-12","runtime":38,"phase":"Multiverse Saga"},
        {"id":300,"title":"Secret Invasion S01E05: \"Harvest\"","parentSeries":"Secret Invasion","type":"TV Episode","releaseDate":"2023-07-19","runtime":39,"phase":"Multiverse Saga"},
        {"id":301,"title":"Secret Invasion S01E06: \"Home\"","parentSeries":"Secret Invasion","type":"TV Episode","releaseDate":"2023-07-26","runtime":37,"phase":"Multiverse Saga"},
        {"id":302,"title":"The Marvels","parentSeries":"Multiverse Saga","type":"Movie","releaseDate":"2023-11-10","runtime":105,"phase":"Multiverse Saga"},
        {"id":303,"title":"What If...? S02E01: \"What If... Nebula Joined the Nova Corps?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2023-12-22","runtime":30,"phase":"Multiverse Saga"},
        {"id":304,"title":"What If...? S02E02: \"What If... Peter Quill Attacked Earth's Mightiest Heroes?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2023-12-23","runtime":30,"phase":"Multiverse Saga"},
        {"id":305,"title":"What If...? S02E03: \"What If... Happy Hogan Saved Christmas?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2023-12-24","runtime":30,"phase":"Multiverse Saga"},
        {"id":306,"title":"What If...? S02E04: \"What If... Iron Man Crashed into the Grandmaster?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2023-12-25","runtime":30,"phase":"Multiverse Saga"},
        {"id":307,"title":"What If...? S02E05: \"What If... Captain Carter Fought the Hydra Stomper?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2023-12-26","runtime":30,"phase":"Multiverse Saga"},
        {"id":308,"title":"What If...? S02E06: \"What If... Kahhori Reshaped the World?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2023-12-27","runtime":30,"phase":"Multiverse Saga"},
        {"id":309,"title":"What If...? S02E07: \"What If... Hela Found the Ten Rings?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2023-12-28","runtime":30,"phase":"Multiverse Saga"},
        {"id":310,"title":"What If...? S02E08: \"What If... the Avengers Assembled in 1602?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2023-12-29","runtime":30,"phase":"Multiverse Saga"},
        {"id":311,"title":"What If...? S02E09: \"What If... Strange Supreme Intervened?\"","parentSeries":"What If...?","type":"TV Episode","releaseDate":"2023-12-30","runtime":30,"phase":"Multiverse Saga"},
        {"id":312,"title":"Deadpool & Wolverine","parentSeries":"Multiverse Saga","type":"Movie","releaseDate":"2024-07-26","runtime":127,"phase":"Multiverse Saga"},
    ];

    // --- STATE MANAGEMENT ---
    let state = {
        items: [],
        filter: 'all', // 'all', 'Movie', 'TV Episode', 'Short,Special'
        searchTerm: '',
        view: 'main' // 'main', 'watched', 'skipped'
    };

    const ui = {
        list: document.getElementById('mcu-list'),
        searchBar: document.getElementById('search-bar'),
        themeToggle: document.getElementById('theme-toggle'),
        watchedCounter: document.getElementById('watched-counter'),
        progressBar: document.getElementById('progress-bar'),
        timeWatched: document.getElementById('time-watched'),
        timeRemaining: document.getElementById('time-remaining'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        viewWatchedBtn: document.getElementById('view-watched-btn'),
        viewSkippedBtn: document.getElementById('view-skipped-btn')
    };

    function saveState() {
        const dataToSave = state.items.map(item => ({
            id: item.id,
            watched: item.watched,
            skipped: item.skipped,
            watchedTimestamp: item.watchedTimestamp
        }));
        localStorage.setItem('mcuTrackerState', JSON.stringify(dataToSave));
        localStorage.setItem('mcuTheme', document.body.classList.contains('dark-mode'));
    }

    function loadState() {
        const savedState = JSON.parse(localStorage.getItem('mcuTrackerState'));
        state.items = mcuData.map(item => {
            const savedItem = savedState ? savedState.find(s => s.id === item.id) : null;
            return { ...item, ...savedItem };
        });

        const savedTheme = localStorage.getItem('mcuTheme') === 'true';
        if (savedTheme) {
            document.body.classList.add('dark-mode');
            ui.themeToggle.textContent = '☀️';
        }
    }

    // --- RENDER FUNCTIONS ---
    function formatTime(minutes) {
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return `${h}h ${m}m`;
    }

    function updateProgress() {
        const itemsForProgress = mcuData.filter(item => !item.skipped);
        const totalCount = itemsForProgress.length;
        const watchedCount = state.items.filter(item => item.watched && !item.skipped).length;

        ui.watchedCounter.textContent = `Watched: ${watchedCount}/${totalCount}`;
        
        const progressPercentage = totalCount > 0 ? (watchedCount / totalCount) * 100 : 0;
        ui.progressBar.style.width = `${progressPercentage}%`;

        let watchedMinutes = 0;
        let remainingMinutes = 0;

        const filteredItems = getFilteredItems();

        filteredItems.forEach(item => {
            if (!item.skipped) {
                if (item.watched) {
                    watchedMinutes += item.runtime;
                } else {
                    remainingMinutes += item.runtime;
                }
            }
        });

        ui.timeWatched.textContent = `Time Watched: ${formatTime(watchedMinutes)}`;
        ui.timeRemaining.textContent = `Time Remaining: ${formatTime(remainingMinutes)}`;
    }

    function getFilteredItems() {
        const types = state.filter === 'all' ? null : state.filter.split(',');
        return state.items.filter(item => {
            const matchesFilter = !types || types.includes(item.type);
            const matchesSearch = item.title.toLowerCase().includes(state.searchTerm) || item.parentSeries.toLowerCase().includes(state.searchTerm);
            return matchesFilter && matchesSearch;
        });
    }

    function renderList() {
        ui.list.innerHTML = ''; // Clear existing list
        const itemsToRender = getFilteredItems();

        const recentlyWatched = state.items
            .filter(item => item.watched && !item.skipped)
            .sort((a, b) => b.watchedTimestamp - a.watchedTimestamp)
            .slice(0, 5)
            .map(item => item.id);

        let itemsToShow;
        if (state.view === 'main') {
            itemsToShow = itemsToRender.filter(item => !item.skipped && (!item.watched || recentlyWatched.includes(item.id)));
        } else if (state.view === 'watched') {
            itemsToShow = itemsToRender.filter(item => item.watched && !item.skipped && !recentlyWatched.includes(item.id));
        } else { // skipped
            itemsToShow = itemsToRender.filter(item => item.skipped);
        }
        
        if (itemsToShow.length === 0) {
            ui.list.innerHTML = `<li class="mcu-item">No items to show.</li>`;
        }

        itemsToShow.forEach(item => {
            const li = document.createElement('li');
            li.className = `mcu-item type-${item.type.replace(/\s+/g, '-')}`;
            li.dataset.id = item.id;
            
            const isRestorable = state.view === 'skipped';
            const actionButtonLabel = isRestorable ? '♻️' : '🚫';
            const actionButtonTitle = isRestorable ? 'Restore Item' : 'Skip Item';

            li.innerHTML = `
                <input type="checkbox" ${item.watched ? 'checked' : ''} ${state.view !== 'main' ? 'disabled' : ''}>
                <div class="item-details">
                    <span class="title">${item.title}</span>
                    <span class="meta">${item.parentSeries} • ${item.runtime} min • ${item.type}</span>
                </div>
                <div class="item-actions">
                    <button class="skip-btn" title="${actionButtonTitle}">${actionButtonLabel}</button>
                </div>
            `;
            ui.list.appendChild(li);
        });

        updateProgress();
    }

    // --- EVENT LISTENERS ---
    ui.list.addEventListener('click', e => {
        const target = e.target;
        const li = target.closest('.mcu-item');
        if (!li) return;
        
        const id = parseInt(li.dataset.id);
        const item = state.items.find(i => i.id === id);

        if (target.type === 'checkbox') {
            item.watched = target.checked;
            item.watchedTimestamp = target.checked ? Date.now() : null;
            saveState();
            // Add a small delay for the check animation before hiding
            setTimeout(renderList, 300);
        }

        if (target.classList.contains('skip-btn')) {
            item.skipped = !item.skipped; // Toggle skipped state
            saveState();
            renderList();
        }
    });

    ui.searchBar.addEventListener('input', e => {
        state.searchTerm = e.target.value.toLowerCase();
        renderList();
    });

    ui.themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        ui.themeToggle.textContent = isDark ? '☀️' : '🌙';
        saveState();
    });

    ui.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            state.filter = btn.dataset.filter;
            state.view = 'main';
            ui.filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderList();
        });
    });

    ui.viewWatchedBtn.addEventListener('click', e => {
        e.preventDefault();
        state.view = 'watched';
        ui.filterBtns.forEach(b => b.classList.remove('active'));
        renderList();
    });
    
    ui.viewSkippedBtn.addEventListener('click', e => {
        e.preventDefault();
        state.view = 'skipped';
        ui.filterBtns.forEach(b => b.classList.remove('active'));
        renderList();
    });


    // --- INITIALIZATION ---
    loadState();
    renderList();

    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('Service Worker registered.', reg))
                .catch(err => console.error('Service Worker registration failed:', err));
        });
    }
});