// ✅ تمرين 06: Count Odd Numbers
// اكتب دالة تُرجع عدد الأرقام الفردية داخل مصفوفة
// تتجاهل القيم غير الرقمية (مثل string أو null)

function countOdds(arr) {
  return arr.filter(function(num) {
    return typeof num === 'number' && num % 2 !== 0;
  }).length;
}

// ✅ اختبارات:
console.log(countOdds([1, 2, 3, 4, 5]));           // 3
console.log(countOdds([2, 4, 6, 8]));             // 0
console.log(countOdds([1, 3, 5, 7]));            // 4
console.log(countOdds([]));                     // 0
console.log(countOdds([1, '3', null, 5]));     // 2
