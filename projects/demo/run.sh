#!/bin/zsh


# tmux source-file .tmux.conf

# tmux new-window -n "app" -t prism:1
# tmux new-window -n "proxy" -t prism:2

# tmux send-keys -t prism:1 "`rushx dev`" C-m
# tmux send-keys -t prism:2 "`rushx proxy`" C-m

# tmux -CC attach-session -d


tmux new-session -d -n "prism" -s prism

tmux new-window -n "lib" -t prism:1
tmux new-window -n "app" -t prism:2
tmux new-window -n "proxy" -t prism:3
#sends keys to first and second terminals
# tmux send -t 0:0.0 "rushx dev" C-m
# tmux send -t 0:0.1 "rushx proxy" C-m
tmux -CC attach-session -d
