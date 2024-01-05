#!/bin/zsh

tmux new-session -d -n "prism" -s prism
tmux source-file .tmux.conf

tmux new-window -n "app" -t prism:1
tmux new-window -n "proxy" -t prism:2

tmux send-keys -t prism:1 "`rushx dev`" C-m
tmux send-keys -t prism:2 "`rushx proxy`" C-m

tmux -CC attach-session -d
