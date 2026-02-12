const ctx = document.getElementById('taskChart');

new Chart(ctx, {
type: 'bar',
data: {
labels: ['S','M','T','W','T','F','S'],
datasets: [{
data: [18,12,8,15,20,6,19],
backgroundColor: [
'#c7c3ff','#8e87ff','#b3adff',
'#6c63ff','#5b5bd6','#a8a2ff','#4f46e5'
],
borderRadius: 10
}]
},
options: {
maintainAspectRatio:false,
plugins:{legend:{display:false}},
scales:{
x:{grid:{display:false}},
y:{grid:{color:"#f1f3f8"}}
}
}
});