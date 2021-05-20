import tkinter

rootWindow = tkinter.Tk()

rootWindow.title("Who is Hayley Worthman?") #title to pop up window
rootWindow.geometry('1040x480-8+200')

label = tkinter.Label(rootWindow, text="Upcoming Software Engineer")
label.grid(row=0,column=0)

leftFrame = tkinter.Frame(rootWindow)
leftFrame.grid(row=1, column=1)

canvas = tkinter.Canvas(leftFrame, relief='raised', borderwidth=6)
canvas.grid(row=1, column=0)

rightFrame = tkinter.Frame(rootWindow)
rightFrame.grid(row=1, column=2, sticky='n')

button_masters = tkinter.Button(rightFrame, text="M.A. Communication Studies, New Mexico State University")
button_undergrad = tkinter.Button(rightFrame, text="B.A. Psych., Minor in Edu., University of Massachusetts, Amherst")
button_cs = tkinter.Button(rightFrame, text="Udemy Python Course with Tim Buchalka")

button_masters.grid(row=0, column=0)
button_undergrad.grid(row=1, column=0)
button_cs.grid(row=2, column=0)

rootWindow.columnconfigure(0, weight=1)
rootWindow.columnconfigure(1, weight=1)
rootWindow.grid_columnconfigure(2, weight=1)

leftFrame.config(relief='sunken', borderwidth=1)
rightFrame.config(relief='sunken', borderwidth=1)
leftFrame.grid(sticky='ns')
rightFrame.grid(sticky='new')

rightFrame.columnconfigure(0, weight=1)
button_masters.grid(sticky='ew')
rootWindow.mainloop()

