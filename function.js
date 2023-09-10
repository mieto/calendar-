

// カレンダー表示関数 枠組みの表示
window.onload = function () {
    const calendar_body = document.getElementById('calendar_body');
    const prev_btn = document.getElementById('prev');
    const next_btn = document.getElementById('next');

    // 表示の関数
    function get_create_calendar(year, month) {
        calendar_body.innerHTML = '';

        const first_day = new Date(year, month, 1);
        const end_day = new Date(year, month + 1, 0);
        const days_in_month = end_day.getDate();
        const starting_day = first_day.getDay();

        let date = 1;

        // 行の生成全部で6つだが曜日がhtml側に日月火水木金土と記述済みのため5行でok
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            // 列全部で7つ
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < starting_day) {
                    const cell = document.createElement('td');
                    row.appendChild(cell);
                } else if (date <= days_in_month) {
                    // 
                    const cell = document.createElement('td');
                    cell.textContent = date;
                    row.appendChild(cell);
                    date++;
                } else {
                    // 月末
                    const cell = document.createElement('td');
                    row.appendChild(cell);
                }
            }
            calendar_body.appendChild(row);
            if (date > days_in_month) {
                break;
            }
        }
    }
    // 年月表示
    const current_year_element = document.getElementById('current_year');
    const current_month_element = document.getElementById('current_month');
    const current_date1_element = document.getElementById('current_day');


    // windowが開かれると現在の年月を取得
    const current_date = new Date();
    let current_year = current_date.getFullYear();
    let current_month = current_date.getMonth();
    let current_date1 = current_date.getDate();
    current_year_element.textContent = current_year + '年';
    current_month_element.textContent = (current_month + 1) + '月';
    current_date1_element.textContent = '本日の日付' + (current_month +1) + '月' + current_date1 + '日';
    // 初期画面生成
    get_create_calendar(current_year, current_month);

    // ボタンはイベントリスナーがギミックの本体
    // prev_btn
    prev_btn.addEventListener('click', () => {
        current_month--;
        if (current_month < 0) {
            current_month = 11;
            current_year--;
        }
        get_create_calendar(current_year, current_month);
        current_year_element.textContent = current_year + '年';
        current_month_element.textContent = current_month + 1 +'月';
    });

    // next_btn
    next_btn.addEventListener('click', () => {
        current_month++;
        if (current_month > 11) {
            current_month = 0;
            current_year++;
        }
        get_create_calendar(current_year, current_month);
        current_year_element.textContent = current_year + '年';
        current_month_element.textContent = current_month + 1 + '月';
    });
};



