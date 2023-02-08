         //JS este limbaj care nu este tipizat, adica nu avem nevoie sa specificam tipul variabilei
        //diferenta dintre var si let este ca let este o variabila locala, adica nu poate fi accesata din afara functiei
        const daysInWeek = 7;
        let hourPerDay = 6;
        let salaryPerHour = 8.5;

        document.write("Salariul pe saptamana este: " + (daysInWeek * hourPerDay * salaryPerHour) + " dolari");
        document.write("Salariul pe luna este: " + (daysInWeek * hourPerDay * salaryPerHour * 4) + " dolari");