import React from 'react'

import {Tabs, Tab} from 'react-bootstrap'

import TaskInProgress from './TaskInProgress'
import TaskFinished from './TaskFinished'
import TaskForm from './TaskForm'


const Tasks = ({userIsAdmin, 
                tasks, 
                taskProgress, 
                taskUrgency, 
                taskFinish, 
                taskReturn,  
                taskDelete, 
                taskMoveUp, 
                taskMoveDown, 
                onTaskCreation}) => {

    return (
        <div>
            <Tabs defaultActiveKey="Active List" className="mb-3 h4">
                <Tab eventKey="Active List" title="Active List">
                    {userIsAdmin && <TaskForm onTaskCreation={onTaskCreation}/>}
                    {tasks.map(task => 
                        <TaskInProgress 
                            key={task.id}
                            task={task}
                            userIsAdmin={userIsAdmin}
                            taskDelete={taskDelete}
                            taskFinish={taskFinish}
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
                            taskReturn={taskReturn}
                        />
                    )}
                </Tab>
            </Tabs>
        </div>
    )
}

export default Tasks
