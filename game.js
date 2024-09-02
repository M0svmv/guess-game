const characters = [
    {
        name: "نجيب محفوظ",
        hints: [
            "أول عربي يحصل على جائزة نوبل في الأدب.",
            "كاتب مصري مشهور برواياته الواقعية.",
            "كتب ثلاثية القاهرة."
        ],
        bio: "نجيب محفوظ هو روائي مصري، يعتبر من أبرز أدباء العرب في العصر الحديث. حصل على جائزة نوبل في الأدب عام 1988."
    },
    {
        name: "محمود درويش",
        hints: [
            "شاعر فلسطيني بارز.",
            "كتب 'سجل أنا عربي'.",
            "اعتبر من أبرز شعراء المقاومة الفلسطينية."
        ],
        bio: "محمود درويش هو شاعر فلسطيني، يعد من أهم الشعراء الفلسطينيين والعرب المعاصرين، وأحد من ساهموا في تطوير الشعر العربي."
    },
    {
        name: "طه حسين",
        hints: [
            "لقب بعميد الأدب العربي.",
            "كان أعمى وفقد بصره في سن مبكرة.",
            "كتب كتاب 'الأيام'."
        ],
        bio: "طه حسين هو كاتب وناقد مصري، يعتبر من أبرز أعلام الأدب العربي الحديث، ولقب بعميد الأدب العربي."
    },
    {
        name: "جبران خليل جبران",
        hints: [
            "كاتب وشاعر لبناني.",
            "كتب 'النبي'.",
            "يعتبر من رموز الأدب المهجري."
        ],
        bio: "جبران خليل جبران هو أديب وشاعر ورسام لبناني، يعتبر من أبرز أدباء المهجر. أشهر أعماله كتاب 'النبي' الذي ترجم إلى لغات عديدة."
    },
    {
        name: "أدونيس",
        hints: [
            "شاعر سوري معاصر.",
            "أحد أعلام الشعر العربي الحديث.",
            "كتب ديوان 'أغاني مهيار الدمشقي'."
        ],
        bio: "أدونيس، واسمه الحقيقي علي أحمد سعيد إسبر، هو شاعر وناقد سوري، يعد من أبرز الشعراء العرب المعاصرين. يعتبر من أهم المساهمين في تجديد الشعر العربي."
    },
    {
        name: "أمل دنقل",
        hints: [
            "شاعر مصري من صعيد مصر.",
            "كتب 'لا تصالح'.",
            "رمز للمقاومة الثقافية."
        ],
        bio: "أمل دنقل هو شاعر مصري، يعتبر من أبرز رموز الشعر العربي المعاصر، اشتهر بقصائد المقاومة والرفض، وأشهر أعماله 'لا تصالح'."
    },
    {
        name: "غادة السمان",
        hints: [
            "كاتبة وشاعرة سورية.",
            "اشتهرت بكتابة الأدب الرومانسي.",
            "كتبت 'أعلنت عليك الحب'."
        ],
        bio: "غادة السمان هي كاتبة وشاعرة سورية، تعد من أبرز الأديبات العربيات. اشتهرت بأعمالها الرومانسية والوجدانية، ومن أبرز كتبها 'أعلنت عليك الحب'."
    },
    {
        name: "نزار قباني",
        hints: [
            "شاعر سوري اشتهر بقصائده الرومانسية.",
            "كتب 'بلقيس'.",
            "اعتبر من أعظم شعراء الحب في العالم العربي."
        ],
        bio: "نزار قباني هو شاعر ودبلوماسي سوري، يعد من أعظم شعراء الحب والغزل في العالم العربي. كتب العديد من القصائد التي تحولت إلى أغاني شهيرة."
    },
    {
        name: "فدوى طوقان",
        hints: [
            "شاعرة فلسطينية بارزة.",
            "كتبت عن النضال والمقاومة.",
            "أخت الشاعر إبراهيم طوقان."
        ],
        bio: "فدوى طوقان هي شاعرة فلسطينية، عرفت بقصائدها التي تناولت قضايا النضال والمقاومة. لها مكانة مميزة في الأدب الفلسطيني."
    },
    {
        name: "الطيب صالح",
        hints: [
            "كاتب سوداني.",
            "كتب 'موسم الهجرة إلى الشمال'.",
            "يعتبر من أعظم الأدباء السودانيين."
        ],
        bio: "الطيب صالح هو كاتب وروائي سوداني، يعد من أهم الأدباء العرب. أشهر أعماله رواية 'موسم الهجرة إلى الشمال' التي ترجمت إلى العديد من اللغات."
    },
    {
        name: "إيليا أبو ماضي",
        hints: [
            "شاعر لبناني مهجري.",
            "كتب 'الطلاسم'.",
            "أسس مجلة 'السمير' في نيويورك."
        ],
        bio: "إيليا أبو ماضي هو شاعر لبناني يعتبر من أعلام الشعر المهجري. أسس مجلة 'السمير' في نيويورك وكتب العديد من القصائد الفلسفية والوجدانية."
    },
    {
        name: "بدر شاكر السياب",
        hints: [
            "شاعر عراقي.",
            "يعتبر من مؤسسي الشعر الحر.",
            "كتب 'أنشودة المطر'."
        ],
        bio: "بدر شاكر السياب هو شاعر عراقي، يعد من أبرز مؤسسي الشعر الحر في الأدب العربي. اشتهر بقصائده التي تناولت موضوعات الحب والوطن."
    },
    {
        name: "مي زيادة",
        hints: [
            "أديبة وشاعرة لبنانية.",
            "أدارت صالونًا أدبيًا شهيرًا في القاهرة.",
            "كانت على علاقة صداقة مع جبران خليل جبران."
        ],
        bio: "مي زيادة هي أديبة وشاعرة لبنانية، تعتبر من رموز الحركة الأدبية النسوية في العالم العربي. كانت من أبرز الشخصيات الثقافية في عصرها."
    },
    {
        name: "أبو العلاء المعري",
        hints: [
            "شاعر وفيلسوف عربي من العصر العباسي.",
            "عرف بلقب 'رهين المحبسين'.",
            "كتب 'رسالة الغفران'."
        ],
        bio: "أبو العلاء المعري هو شاعر وفيلسوف عربي من العصر العباسي. اشتهر بآرائه الفلسفية ونقده للمجتمع، وله العديد من الأعمال الأدبية الهامة."
    },
    {
        name: "أبو الطيب المتنبي",
        hints: [
            "شاعر عربي من العصر العباسي.",
            "أحد أعظم شعراء العرب.",
            "اشتهر بمدحه لسيف الدولة الحمداني."
        ],
        bio: "أبو الطيب المتنبي هو شاعر عربي من العصر العباسي، يعتبر من أعظم شعراء العرب. عرف بمدائحه القوية وبراعته في نظم الشعر."
    },
    {
        name: "جلال الدين الرومي",
        hints: [
            "شاعر صوفي فارسي.",
            "كتب 'المثنوي'.",
            "مؤسس الطريقة المولوية."
        ],
        bio: "جلال الدين الرومي هو شاعر ومتصوف فارسي، يعد من أعظم شعراء الصوفية. مؤسس الطريقة المولوية وله العديد من الأعمال الشعرية الفلسفية."
    },
    {
        name: "سيد قطب",
        hints: [
            "كاتب وناقد أدبي إسلامي.",
            "كتب 'في ظلال القرآن'.",
            "أحد مؤسسي الحركة الإسلامية المعاصرة."
        ],
        bio: "سيد قطب هو كاتب وناقد أدبي إسلامي، معروف بمؤلفاته الأدبية والشرعية، وأحد أبرز مفكري الحركة الإسلامية في القرن العشرين."
    },
    {
        name: "جمال الدين الأفغاني",
        hints: [
            "مفكر إسلامي ثوري.",
            "أسس جمعية العروة الوثقى.",
            "كتب 'موقف العقل والعلم والعلماء'."
        ],
        bio: "جمال الدين الأفغاني هو مفكر إسلامي ثوري، عمل على إحياء الفكر الإسلامي ومواجهة الاستعمار الغربي. أسس جمعية العروة الوثقى وساهم في الفكر الإسلامي الحديث."
    },
    {
        name: "عبد الرحمن الكواكبي",
        hints: [
            "مصلح سياسي واجتماعي.",
            "كتب 'طبائع الاستبداد'.",
            "دافع عن الحرية والإصلاح في العالم العربي."
        ],
        bio: "عبد الرحمن الكواكبي هو مصلح سياسي واجتماعي، معروف بمؤلفاته التي تناولت قضايا الاستبداد والإصلاح. عُرف بدفاعه عن الحرية في العالم العربي."
    },
    {
        name: "إبراهيم نصر الله",
        hints: [
            "روائي وشاعر أردني.",
            "كتب 'زمن الخيول البيضاء'.",
            "استفاد من التراث الفلسطيني في أعماله."
        ],
        bio: "إبراهيم نصر الله هو روائي وشاعر أردني، يعتبر من أبرز الأدباء المعاصرين في العالم العربي. تستند أعماله إلى التراث الفلسطيني وتسعى للتعبير عن قضايا اجتماعية وسياسية."
    },
    {
        name: "الشناوي",
        hints: [
            "شاعر مصري.",
            "كتبه 'من وحي الصحراء'.",
            "اعتبر من أبرز شعراء الشعر العربي."
        ],
        bio: "الشناوي هو شاعر مصري، يُعتبر من أعلام الشعر العربي المعاصر. تتميز أعماله بالأسلوب الفلسفي والعاطفي."
    },
    {
        name: "سحر عبد الله",
        hints: [
            "كاتبة مصرية.",
            "كتبت 'قصص الحب والواقع'.",
            "تتميز بكتاباتها الواقعية والعاطفية."
        ],
        bio: "سحر عبد الله هي كاتبة مصرية، تكتب في الأدب الواقعي والعاطفي. تُعد من أبرز الأصوات النسائية في الأدب العربي."
    },
    {
        name: "بشير الداعوق",
        hints: [
            "كاتب لبناني.",
            "كتب 'ملحمة الزمان'.",
            "تخصص في الأدب التاريخي."
        ],
        bio: "بشير الداعوق هو كاتب لبناني، كتب في الأدب التاريخي والعلمي. تُعتبر أعماله من أبرز الأعمال الأدبية في الأدب العربي."
    },
    
];



let score = 0;
let attemptsLeft = 3;
let usedIndices = [];
let currentHintIndex = 0;

function getRandomCharacterIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * characters.length);
    } while (usedIndices.includes(randomIndex) && usedIndices.length < characters.length);

    return randomIndex;
}

function loadCharacter() {
    if (usedIndices.length === characters.length) {
        document.getElementById("result").innerText = "لقد أجبت على جميع الأسئلة!";
        return;
    }

    const characterIndex = getRandomCharacterIndex();
    usedIndices.push(characterIndex);
    
    const character = characters[characterIndex];
    currentHintIndex = 0;
    attemptsLeft = 3; // إعادة تعيين عدد المحاولات لكل شخصية جديدة
    document.getElementById("hint").innerText = character.hints[currentHintIndex];
    document.getElementById("result").innerText = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("nextQuestionButton").style.display = "none";
    updateScoreAndAttempts();
    enableGuessButton(); // تفعيل زر التخمين عند تحميل الشخصية الجديدة
}

function submitGuess() {
    const lastCharacterIndex = usedIndices[usedIndices.length - 1];
    const character = characters[lastCharacterIndex];
    const userGuess = document.getElementById("guessInput").value.trim();

    if (userGuess === character.name) {
        score++;
        document.getElementById("result").innerText = `صحيح! ${character.bio}`;
        document.getElementById("nextQuestionButton").style.display = "inline-block";
        disableGuessButton(); // تعطيل زر التخمين بعد الإجابة الصحيحة
    } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
            if (currentHintIndex < character.hints.length - 1) {
                currentHintIndex++;
                document.getElementById("hint").innerText = character.hints[currentHintIndex];
            }
            document.getElementById("result").innerText = "تخمين خاطئ، حاول مرة أخرى!";
        } else {
            document.getElementById("result").innerText = `تخمين خاطئ، الإجابة الصحيحة هي: ${character.name}. ${character.bio}`;
            document.getElementById("nextQuestionButton").style.display = "inline-block";
            disableGuessButton(); // تعطيل زر التخمين بعد استخدام جميع المحاولات
        }
    }
    updateScoreAndAttempts();
}

function revealAnswer() {
    const lastCharacterIndex = usedIndices[usedIndices.length - 1];
    const character = characters[lastCharacterIndex];
    document.getElementById("result").innerText = `الإجابة الصحيحة هي: ${character.name}. ${character.bio}`;
    document.getElementById("nextQuestionButton").style.display = "inline-block";
    disableGuessButton(); // تعطيل زر التخمين عند إظهار الإجابة
}

function disableGuessButton() {
    document.querySelector(".submit-button").disabled = true;
}

function enableGuessButton() {
    document.querySelector(".submit-button").disabled = false;
}

function updateScoreAndAttempts() {
    document.getElementById("scoreBox").innerText = `النقاط: ${score}`;
    document.getElementById("attemptsBox").innerText = `المحاولات المتبقية: ${attemptsLeft}`;
}

function loadNextCharacter() {
    loadCharacter();
}

function resetGame() {
    score = 0;
    usedIndices = [];
    currentHintIndex = 0;
    attemptsLeft = 3;
    loadCharacter();
}

document.addEventListener("DOMContentLoaded", loadCharacter);
