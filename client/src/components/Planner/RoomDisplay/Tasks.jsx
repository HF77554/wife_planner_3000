import React, {useEffect, useState} from 'react'

import {Tabs, Tab} from 'react-bootstrap'

import TaskInProgress from './TaskInProgress'
import TaskFinished from './TaskFinished'
import TaskForm from './TaskForm'


function Tasks({userIsAdmin, tasks, taskProgress, taskUrgency, taskFinished, taskDelete, taskMoveUp, taskMoveDown, onTaskCreation}) {

    return (
        <div>
            <Tabs defaultActiveKey="Active List" className="mb-3 h2">
                <Tab eventKey="Active List" title="Active List">
                    {userIsAdmin && <TaskForm onTaskCreation={onTaskCreation}/>}
                    {tasks.map(task => 
                        <TaskInProgress 
                            key={task.id}
                            task={task}
                            userIsAdmin={userIsAdmin}
                            taskDelete={taskDelete}
                            taskFinished={taskFinished}
                            taskMoveUp={taskMoveUp}
                            taskMoveDown={taskMoveDown}
                            taskUrgency={taskUrgency}
                            taskProgress={taskProgress}
                        />
                    )}
                </Tab>
                <Tab eventKey="Finished List" title="Finished List">
                    {tasks.map(task => 
                        <TaskFinished
                            key={task.id}
                            task={task}
                            userIsAdmin={userIsAdmin}
                            taskDelete={taskDelete}
                            taskFinished={taskFinished}
                        />
                    )}
                </Tab>
            </Tabs>
        </div>
    )
}

export default Tasks
