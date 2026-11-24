' Runs the weekly compliance watch in one hidden console (window style 0) and waits for it to finish, so nothing
' flashes on screen. Used by the Windows task "Commerce Lab compliance watch" (Mondays 17:30; if the PC was off, it
' runs when it is next on). What the run printed is kept in .compliance-watch\last-run.log.
' "node" is found through PATH, so a Node update does not break this.
Dim sh, fso, root
Set sh = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
root = fso.GetParentFolderName(fso.GetParentFolderName(WScript.ScriptFullName))
If Not fso.FolderExists(root & "\.compliance-watch") Then fso.CreateFolder(root & "\.compliance-watch")
sh.CurrentDirectory = root
sh.Run "cmd /c node tools\compliance-watch.mjs > .compliance-watch\last-run.log 2>&1", 0, True
