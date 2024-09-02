if exists('g:loaded_vim_cord')
  finish
endif

let g:loaded_ray_so = 1

let g:ray_so_theme = get(g:, 'ray_so_theme', 'vercel')
let g:ray_so_padding = get(g:, 'ray_so_padding', 16)
let g:ray_so_background = get(g:, 'ray_so_background', v:true)
let g:ray_so_darkmode = get(g:, 'ray_so_darkmode', v:true)

function! s:call(Callback) abort
  call denops#plugin#wait_async('vim-cord', a:Callback)
endfunction

function! s:init() abort
  let l:Callback = function('denops#notify', [
        \ 'vim-cord',
        \])
  call s:call(l:Callback)
endfunction

command! -bar RaySo call s:init()
