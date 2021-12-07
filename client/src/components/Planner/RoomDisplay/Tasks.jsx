import React from 'react'

import {Tabs, Tab} from 'react-bootstrap'

import TaskInProgress from './TaskInProgress'
import TaskFinished from './TaskFinished'


function Tasks({tasks, onTaskChanges}) {
    return (
        <div>
            <Tabs defaultActiveKey="To-do List" className="mb-3 h2">
                <Tab eventKey="Working List" title="Working List">
                    {tasks.map(task => 
                        <TaskInProgress 
                            key={task.id}
                            task={task}
                            onTaskChanges={onTaskChanges}
                        />
                    )}
                </Tab>
                <Tab eventKey="Finished List" title="Finished List">
                    {tasks.map(task => 
                        <TaskFinished
                            key={task.id}
                            task={task}
                        />
                    )}
                </Tab>
            </Tabs>
        </div>
    )
}

export default Tasks
