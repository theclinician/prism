#!/bin/zsh


tmux new-session -d -n "proxy" -s prism
tmux source-file .tmux.conf

tmux new-window -n "lib" -t prism:1
tmux new-window -n "app" -t prism:2

sleep 0.5
tmux send -t prism:0 "cd projects/demo && rushx proxy" C-m
tmux send -t prism:1 "cd packages/prism && rushx dev" C-m
tmux send -t prism:2 "cd projects/demo && rushx dev" C-m

tmux -CC attach-session -d

