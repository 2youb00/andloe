let closebtn=document.querySelector('.fa-solid');
let defeat=document.querySelector('.defeat-andlos-subtitle');







let ifta7=true;




closebtn.addEventListener('click',()=>{
    console.log('sss');
    if(ifta7){
        closebtn.classList.remove('fa-caret-down');
        closebtn.classList.add('fa-caret-left');
        defeat.innerHTML='<p class="group"> <a href="http://aminoapps.com/p/h5qet6"> مجموعة</a> لتحرير الاندلس</p>';
        ifta7=false;
    }
    else{
        closebtn.classList.add('fa-caret-down');
        closebtn.classList.remove('fa-caret-left');
        defeat.innerHTML=`
        <p>في لحظة تأبى الزمن النسيان، هوت الأندلس، حيث تلاشت عبقريتها الثقافية وتفتتت وحدتها. سقطت تلك الأرض الساحرة، تاركة خلفها جرحًا عميقًا في قلب التاريخ. اليك بعض اسباس تلك الهزيمة :</p>
      <ul>
        <li>تفرق أمرائها وعدم اتحادهم.</li>
        <li>جبن كثير من الأمراء الذين فقدوا الشجاعة والاستعداد للتضحية.</li>
        <li>تقليل قوة ووحدة الجيش بسبب انشغالهم بالصراعات الداخلية.</li>
        <li>إغراءات مادية من العدو أثناء الصراعات، مما زاد من ضعف المقاومة.</li>
        <li>فقدان الالتزام بالدعوة إلى الله وانخراط الأمراء في الهموم الشخصية.</li>
        <li>استفحال الفساد والرغبة الشخصية في الحكم بدلاً من خدمة الخير العام.</li>
        <li>ضعف النظام الاقتصادي والاجتماعي مما جعل الأفراد أكثر استعدادًا لقبول الرشاوى والهدايا من العدو.</li>
        <li>فقدان الروح الوطنية والانتماء إلى الدولة، مما سهل استيلاء العدو عليها.</li>
      </ul>
      <p class="group"> <a href="http://aminoapps.com/p/h5qet6"> مجموعة</a> لتحرير الاندلس</p>
        `;
        ifta7=true;
    }
})