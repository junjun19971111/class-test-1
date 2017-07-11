'use strict';
function  main() {
    var s1=['张三',95,80,75,80];
    var s2=['李四',80,70,85,90];

    var student1=get_object(s1);
    var student2=get_object(s2);

    var student_arry=[student1,student2];

    student_arry=get_totall_score(student_arry);

    student_arry=get_ave_score(student_arry);

    var mid_score=get_mid_score(student_arry);

    var totall_class_score=get_toall_ave(student_arry);

    console.log('成绩单');
    console.log('姓名|语文|数学|英语|编程|平均分|总分');
    console.log('==============================');

    for(var i=0;i<student_arry.length;i++){
        console.log(student_arry[i].name+'|'+student_arry[i].chinese+'|'+student_arry[i].math+'|'+student_arry[i].english+'|'+student_arry[i].code+'|'+student_arry[i].ave_score+'|'+student_arry[i].totall_score);
    }
    console.log('==============================');
    console.log('全班总分平均分：'+totall_class_score);
    console.log('全班总分中位数：'+mid_score);

}


function get_ave_score(studentArry){
  var n=4;
  for(var i=0;i<studentArry.length;i++){
       studentArry[i].ave_score=studentArry[i].totall_score/4;
  }
  return studentArry;
}

function get_totall_score(studentArry1) {
    for(var i=0;i<studentArry1.length;i++){
      studentArry1[i].totall_score=studentArry1[i].chinese+studentArry1[i].math+studentArry1[i].english+studentArry1[i].code;
    }
  return studentArry1;
}

function get_mid_score(studentArry2) {
    var  score=[];
    for(var i=0;i<studentArry2.length;i++){
      score[i]=studentArry2[i].totall_score;
    }
    score=score.sort();
    var l=score.length;
    if(l%2===0){
      return (score[l/2]+score[(l/2)-1])/l;
    }
    else {
      return score[l/2];
    }
}

function get_object(arry) {
    var student=new Object();
    student.name=arry[0];
    student.chinese=arry[1];
    student.math=arry[2];
    student.english=arry[3];
    student.code=arry[4];
    student.ave_score=null;
    student.totall_score=null;

    return student;
}
function get_toall_ave(studentArryx) {
  var x=0;
  var n=2;
  for(var i=0;i<studentArryx.length;i++){
    x=studentArryx[i].totall_score+x;
  }
  return x/2;
}
main();
