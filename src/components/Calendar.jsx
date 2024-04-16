import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // another plugin!
import listPlugin from '@fullcalendar/list' // another plugin!
import '../components/Calendar.css'

import React,{useState} from 'react'

const Calendar = () => {
    const [events, setEvents] = useState([
        { title: '吃滷肉飯', date: '2024-04-11' },
        { title: '大學聚餐', date: '2024-04-02' }
    ]);

    const handleDateClick = (arg) => {
        const title = prompt('輸入事件標題:');
        if (title) {
            setEvents([...events, { title, date: arg.dateStr }]);
        }
    }
    
    return (
        <div>
            <div className='container'>
            <h1>行事曆</h1>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridYear,dayGridMonth,timeGridWeek,timeGridDay'
                }}
                locale='zh-tw'
                buttonText={{
                    today: '今天',
                    year:'年',
                    month: '月',
                    week: '周',
                    day: '日',
                    list: '列表'
                }}
                dateClick={handleDateClick}
                initialView="dayGridMonth"
                events={events}
            />
            </div>
            
        </div>
    )
}

export default Calendar
