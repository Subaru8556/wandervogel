import q_data from '../question.json' assert {type: 'json'}

const qa_div = document.getElementById('qa')

q_data.qa.forEach(qa => {
    const qa_list = document.createElement('div');
    qa_list.classList.add('radius','top-margin');

    const q = document.createElement('p');
    q.classList.add('h4','top-margin-15','font-weight-bold');
    q.textContent = qa.q;
    qa_list.appendChild(q);

    const a = document.createElement('p');
    a.classList.add('h5','top-padding-10');
    a.textContent = qa.a;
    qa_list.appendChild(a);

    qa_div.appendChild(qa_list)
});

let textarea = document.getElementById('q-textarea');
let clientHeight = textarea.clientHeight;

textarea.addEventListener('input', ()=>{
	textarea.style.height = clientHeight + 'px';
	let scrollHeight = textarea.scrollHeight;
	textarea.style.height = scrollHeight + 'px';
});
