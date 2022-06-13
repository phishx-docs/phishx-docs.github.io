# pre commit
DATE=`date "+%Y%m%d-%H"`
git add .
git commit -m pre-deploy_$DATE
git push https://phishx-docs:$GHDOCSTOKEN@github.com/phishx-docs/phishx-docs.github.io.git master
git push https://phishx-docs:$GHDOCSTOKEN@github.com/phishx-docs/phishx-docs.github.io.git