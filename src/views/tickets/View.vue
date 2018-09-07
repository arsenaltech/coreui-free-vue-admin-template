<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
          <b-tabs v-model="tabIndex[0]">
            <b-tab active>
              <template slot="title">
                <i class="icon-docs"></i> {{tabs[0]}}
              </template>
              <b-row>
                <b-col sm="6" md="6">
                <b-card header="WB Exhibitor Service - ML">
                  <strong>Contact : Warner Bros</strong><br />
                  Michael Lynch <br />
                  3903 W Oliver Ave, Rm 2434 <br />
                  Burbank CA 91522
                </b-card>
              </b-col>
                <b-col sm="6" md="6" >
                  <b-card header="Status">
                    <b-row>
                      <b-col sm="6" md="6">
                        <h1 class="text-primary">Finishing</h1>
                        <h3>Banner</h3>
                      </b-col>
                      <b-col class="border-left" sm="6" md="6" >
                          <b-row class="pb-1 pl-2">
                            <h4>Order Date:</h4>
                            <span class="p-1">Aug 15th 2018</span>

                          </b-row>
                          <b-row class="border-top pt-3 pl-2">
                            <h4>Ship Date:</h4>
                            <span class="p-1">Sep 08th 2018</span>
                          </b-row>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-col>

              </b-row>
              <b-tabs>
                <b-tab title="Item info" active>
                  <b-row>
                    <b-col md="2">
                      <img src="https://via.placeholder.com/200x200" class="rounded">
                    </b-col>
                    <b-col md="10">
                      <table class="table">
                        <tbody>
                        <tr>
                          <td><strong>Size:</strong> 23x12 </td>
                        </tr>
                        <tr>
                          <td><strong>Media:</strong> Samba Opaque</td>

                        </tr>
                        <tr>

                          <td><strong>Finishing:</strong> Trim Banner</td>
                        </tr>
                        <tr>

                          <td><strong>Frame:</strong> Xys</td>
                        </tr>
                        <tr>

                          <td><strong>Wood:</strong> Abc </td>
                        </tr>
                        <tr>

                          <td><strong>Display Option:</strong> Placeholder</td>
                        </tr>
                        <tr>

                          <td><strong>Sides:</strong> Single Sides</td>
                        </tr>

                        </tbody>
                      </table>
                    </b-col>
                  </b-row>

                </b-tab>
                <b-tab title="Check list" >
                  <div class="row">
                    <div class="col-md-12">

                        <div class="box-body">
                          <ul class="todo-list ui-sortable">
                            <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>

            </span>
                              <input type="checkbox" value="" name="">
                              <span class="text">Prpress</span>
                              <small class="label label-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
                              <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                              </div>
                            </li>
                            <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>
            </span>
                              <input type="checkbox" value="" name="">
                              <span class="text">Design</span>
                              <small class="label label-info"><i class="fa fa-clock-o"></i> 4 hours</small>
                              <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                              </div>
                            </li>
                            <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>
            </span>
                              <input type="checkbox" value="" name="">
                              <span class="text">Finishing</span>
                              <small class="label label-warning"><i class="fa fa-clock-o"></i> 1 day</small>
                              <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                              </div>
                            </li>
                            <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>
            </span>
                              <input type="checkbox" value="" name="">
                              <span class="text">Mounting</span>
                              <small class="label label-success"><i class="fa fa-clock-o"></i> 3 days</small>
                              <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                              </div>
                            </li>
                            <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>
            </span>
                              <input type="checkbox" value="" name="">
                              <span class="text">File Processsing</span>
                              <small class="label label-primary"><i class="fa fa-clock-o"></i> 1 week</small>
                              <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                              </div>
                            </li>
                            <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>
            </span>
                              <input type="checkbox" value="" name="">
                              <span class="text">Installation</span>
                              <small class="label label-default"><i class="fa fa-clock-o"></i> 1 month</small>
                              <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="box-footer clearfix no-border">
                          <button type="button" class="btn btn-default pull-right"><i class="fa fa-plus"></i> Add item</button>
                        </div>
                    </div>


                  </div>
                </b-tab>
              </b-tabs>
              <b-tabs class="mt-4">
                <b-tab title="Item info" active>
                  <b-row>
                    <b-col md="2">
                      <img src="https://via.placeholder.com/200x200" class="rounded float-left">
                    </b-col>
                    <b-col md="10">
                      <table class="table">
                        <tbody>
                        <tr>
                          <td><strong>Size:</strong> 23x12 </td>
                        </tr>
                        <tr>
                          <td><strong>Media:</strong> Samba Opaque</td>

                        </tr>
                        <tr>

                          <td><strong>Finishing:</strong> Trim Banner</td>
                        </tr>
                        <tr>

                          <td><strong>Frame:</strong> Xys</td>
                        </tr>
                        <tr>

                          <td><strong>Wood:</strong> Abc </td>
                        </tr>
                        <tr>

                          <td><strong>Display Option:</strong> Placeholder</td>
                        </tr>
                        <tr>

                          <td><strong>Sides:</strong> Single Sides</td>
                        </tr>

                        </tbody>
                      </table>
                    </b-col>
                  </b-row>

                </b-tab>
                <b-tab title="Check list" >
                  <div class="row">
                    <div class="col-md-12">

                      <div class="box-body">
                        <ul class="todo-list ui-sortable">
                          <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>

            </span>
                            <input type="checkbox" value="" name="">
                            <span class="text">Prpress</span>
                            <small class="label label-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
                            <div class="tools">
                              <i class="fa fa-edit"></i>
                              <i class="fa fa-trash-o"></i>
                            </div>
                          </li>
                          <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>
            </span>
                            <input type="checkbox" value="" name="">
                            <span class="text">Design</span>
                            <small class="label label-info"><i class="fa fa-clock-o"></i> 4 hours</small>
                            <div class="tools">
                              <i class="fa fa-edit"></i>
                              <i class="fa fa-trash-o"></i>
                            </div>
                          </li>
                          <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>
            </span>
                            <input type="checkbox" value="" name="">
                            <span class="text">Finishing</span>
                            <small class="label label-warning"><i class="fa fa-clock-o"></i> 1 day</small>
                            <div class="tools">
                              <i class="fa fa-edit"></i>
                              <i class="fa fa-trash-o"></i>
                            </div>
                          </li>
                          <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>
            </span>
                            <input type="checkbox" value="" name="">
                            <span class="text">Mounting</span>
                            <small class="label label-success"><i class="fa fa-clock-o"></i> 3 days</small>
                            <div class="tools">
                              <i class="fa fa-edit"></i>
                              <i class="fa fa-trash-o"></i>
                            </div>
                          </li>
                          <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>
            </span>
                            <input type="checkbox" value="" name="">
                            <span class="text">File Processsing</span>
                            <small class="label label-primary"><i class="fa fa-clock-o"></i> 1 week</small>
                            <div class="tools">
                              <i class="fa fa-edit"></i>
                              <i class="fa fa-trash-o"></i>
                            </div>
                          </li>
                          <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>
            </span>
                            <input type="checkbox" value="" name="">
                            <span class="text">Installation</span>
                            <small class="label label-default"><i class="fa fa-clock-o"></i> 1 month</small>
                            <div class="tools">
                              <i class="fa fa-edit"></i>
                              <i class="fa fa-trash-o"></i>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="box-footer clearfix no-border">
                        <button type="button" class="btn btn-default pull-right"><i class="fa fa-plus"></i> Add item</button>
                      </div>
                    </div>


                  </div>
                </b-tab>
              </b-tabs>
              <b-row class="mt-4">
                <b-col md="12">
                <b-card header="Checklist">

                <div class="col-md-12">

                    <div class="box-body">
                      <ul class="todo-list ui-sortable">
                        <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>

            </span>
                          <input type="checkbox" value="" name="">
                          <span class="text">Install on top of empire state</span>
                          <small class="label label-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
                          <div class="tools">
                            <i class="fa fa-edit"></i>
                            <i class="fa fa-trash-o"></i>
                          </div>
                        </li>
                        <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>
            </span>
                          <input type="checkbox" value="" name="">
                          <span class="text">Ship to mars</span>
                          <small class="label label-info"><i class="fa fa-clock-o"></i> 4 hours</small>
                          <div class="tools">
                            <i class="fa fa-edit"></i>
                            <i class="fa fa-trash-o"></i>
                          </div>
                        </li>
                        <li>
            <span class="handle ui-sortable-handle">
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-ellipsis-v"></i>
            </span>
                          <input type="checkbox" value="" name="">
                          <span class="text"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</span>
                          <small class="label label-warning"><i class="fa fa-clock-o"></i> 1 day</small>
                          <div class="tools">
                            <i class="fa fa-edit"></i>
                            <i class="fa fa-trash-o"></i>
                          </div>
                        </li>



                      </ul>
                    </div>
                    <div class="box-footer clearfix no-border">
                      <input class="col-sm-11">
                      <button type="button" class="btn btn-default pull-right"><i class="fa fa-plus"></i> Add item</button>
                    </div>
                  </div>
                </b-card></b-col>
              </b-row>
              <b-row>
                <b-col sm="6" md="6">
                  <b-card header="Shipping Information">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </b-card>
                </b-col>
                <b-col sm="6" md="6" >
                  <b-card header="Installation">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </b-card>
                </b-col>

              </b-row>
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="icon-layers"></i> {{tabs[1]}}
              </template>
              <b-row class="pb-2">
              <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
                <b-button block variant="primary">Create Invoice</b-button>
              </b-col>
              <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
                <b-button block variant="secondary">Create Estimate</b-button>
              </b-col>
              <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
                <b-button block variant="success">Create Purchase Order</b-button>
              </b-col></b-row>

              <table class="table table-responsive-sm">
                <thead>
                <tr>
                  <th>Type</th>
                  <th>Date </th>
                  <th>ID</th>
                  <th>Created by</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><span class="badge badge-primary">Invoice</span></td>
                  <td>2012/01/01</td>
                  <td><a href="#">234</a> </td>
                  <td>
                    John Smith
                  </td>
                </tr>
                <tr>
                  <td><span class="badge badge-primary">Invoice</span></td>
                  <td>2012/02/01</td>
                  <td><a href="#">234</a</td>
                  <td>
                    John Snow
                  </td>
                </tr>
                <tr>
                  <td><span class="badge badge-secondary">Estimates</span></td>
                  <td>2012/02/01</td>
                  <td><a href="#">234</a</td>
                  <td>
                    Peter Parker
                  </td>
                </tr>
                <tr>
                  <td><span class="badge badge-success">Purchase order</span></td>
                  <td>2012/03/01</td>
                  <td><a href="#">234</a</td>
                  <td>
                    Tony Stark
                  </td>
                </tr>
                </tbody>
              </table>
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="icon-layers"></i> {{tabs[2]}}
              </template>
              <div class="container">
                <div class="row">
                  <h2>Time Line</h2>
                </div>
                <div class="qa-message-list" id="wallmessages">
                  <div class="message-item" id="m16">
                    <div class="message-inner">
                      <div class="message-head clearfix">
                        <div class="avatar pull-left"><a href="./index.php?qa=user&qa_1=Oleg+Kolesnichenko"><img src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></a></div>
                        <div class="user-detail">
                          <h5 class="handle">Oleg Kolesnichenko</h5>
                          <div class="post-meta">
                            <div class="asker-meta">
                              <span class="qa-message-what"></span>
                              <span class="qa-message-when">
												<span class="qa-message-when-data">Jan 21</span>
											</span>
                              <span class="qa-message-who">
												<span class="qa-message-who-pad">by </span>
												<span class="qa-message-who-data"><a href="./index.php?qa=user&qa_1=Oleg+Kolesnichenko">Oleg Kolesnichenko</a></span>
											</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="qa-message-content">
                        Yo!
                      </div>
                    </div></div>

                  <div class="message-item" id="m9">
                    <div class="message-inner">
                      <div class="message-head clearfix">
                        <div class="avatar pull-left"><a href="./index.php?qa=user&qa_1=amiya"><img src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></a></div>
                        <div class="user-detail">
                          <h5 class="handle">amiya</h5>
                          <div class="post-meta">
                            <div class="asker-meta">
                              <span class="qa-message-what"></span>
                              <span class="qa-message-when">
												<span class="qa-message-when-data">Nov 24, 2013</span>
											</span>
                              <span class="qa-message-who">
												<span class="qa-message-who-pad">by </span>
												<span class="qa-message-who-data"><a href="./index.php?qa=user&qa_1=amiya">amiya</a></span>
											</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="qa-message-content">
                        Nice theme . Excellent one .
                      </div>
                    </div></div>

                  <div class="message-item" id="m7">
                    <div class="message-inner">
                      <div class="message-head clearfix">
                        <div class="avatar pull-left"><a href="./index.php?qa=user&qa_1=russell"><img src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></a></div>
                        <div class="user-detail">
                          <h5 class="handle">russell</h5>
                          <div class="post-meta">
                            <div class="asker-meta">
                              <span class="qa-message-what"></span>
                              <span class="qa-message-when">
												<span class="qa-message-when-data">Oct 25, 2013</span>
											</span>
                              <span class="qa-message-who">
												<span class="qa-message-who-pad">by </span>
												<span class="qa-message-who-data"><a href="./index.php?qa=user&qa_1=russell">russell</a></span>
											</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="qa-message-content">
                        Nullam porta leo vitae ipsum feugiat viverra. In sed placerat mi. Nullam euismod, quam in euismod rhoncus, tellus velit posuere tortor, non cursus nunc velit et lacus.
                      </div>
                    </div></div>

                  <div class="message-item" id="m6">
                    <div class="message-inner">
                      <div class="message-head clearfix">
                        <div class="avatar pull-left"><a href="./index.php?qa=user&qa_1=juggornot"><img src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></a></div>
                        <div class="user-detail">
                          <h5 class="handle">juggornot</h5>
                          <div class="post-meta">
                            <div class="asker-meta">
                              <span class="qa-message-what"></span>
                              <span class="qa-message-when">
												<span class="qa-message-when-data">Oct 24, 2013</span>
											</span>
                              <span class="qa-message-who">
												<span class="qa-message-who-pad">by </span>
												<span class="qa-message-who-data"><a href="./index.php?qa=user&qa_1=juggornot">juggornot</a></span>
											</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="qa-message-content">
                        Integer vitae arcu vitae ligula Cras vestibulum suscipit odio ac dapibus. In hac habitasse platea dictumst. Cras pulvinar erat et nunc fringilla, quis molestie
                      </div>
                    </div></div>

                  <div class="message-item" id="m5">
                    <div class="message-inner">
                      <div class="message-head clearfix">
                        <div class="avatar pull-left"><a href="./index.php?qa=user&qa_1=one_eyed"><img src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></a></div>
                        <div class="user-detail">
                          <h5 class="handle">one_eyed</h5>
                          <div class="post-meta">
                            <div class="asker-meta">
                              <span class="qa-message-what"></span>
                              <span class="qa-message-when">
												<span class="qa-message-when-data">Oct 24, 2013</span>
											</span>
                              <span class="qa-message-who">
												<span class="qa-message-who-pad">by </span>
												<span class="qa-message-who-data"><a href="./index.php?qa=user&qa_1=one_eyed">one_eyed</a></span>
											</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="qa-message-content">
                        Nulla dui ante, pulvinar ac auctor vitae, sollicitudin et tortor. Cras vestibulum suscipit odio ac dapibus. In hac habitasse platea dictumst. Cras pulvinar erat et nunc fringilla, quis molestie diam pulvinar.
                      </div>
                    </div></div>

                  <div class="message-item" id="m4">
                    <div class="message-inner">
                      <div class="message-head clearfix">
                        <div class="avatar pull-left"><a href="./index.php?qa=user&qa_1=muboy"><img src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></a></div>
                        <div class="user-detail">
                          <h5 class="handle">muboy</h5>
                          <div class="post-meta">
                            <div class="asker-meta">
                              <span class="qa-message-what"></span>
                              <span class="qa-message-when">
												<span class="qa-message-when-data">Oct 24, 2013</span>
											</span>
                              <span class="qa-message-who">
												<span class="qa-message-who-pad">by </span>
												<span class="qa-message-who-data"><a href="./index.php?qa=user&qa_1=muboy">muboy</a></span>
											</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="qa-message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum iaculis mi, non dapibus nulla eleifend sed. Etiam ac commodo leo. <br>
                        Donec non sem id tellus mattis convallis. Morbi dapibus nulla ac dui lacinia,
                      </div>
                    </div></div>

                  <div class="message-item" id="m3">
                    <div class="message-inner">
                      <div class="message-head clearfix">
                        <div class="avatar pull-left"><a href="./index.php?qa=user&qa_1=monu"><img src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></a></div>
                        <div class="user-detail">
                          <h5 class="handle">monu</h5>
                          <div class="post-meta">
                            <div class="asker-meta">
                              <span class="qa-message-what"></span>
                              <span class="qa-message-when">
												<span class="qa-message-when-data">Oct 24, 2013</span>
											</span>
                              <span class="qa-message-who">
												<span class="qa-message-who-pad">by </span>
												<span class="qa-message-who-data"><a href="./index.php?qa=user&qa_1=monu">monu</a></span>
											</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="qa-message-content">
                        Suspendisse varius mi consectetur nulla volutpat, nec fermentum turpis vehicula. Curabitur dapibus odio mauris, vitae accumsan sapien auctor non. Duis tempus ante id nulla vestibulum mattis.
                      </div>
                    </div></div>

                  <div class="message-item" id="m2">
                    <div class="message-inner">
                      <div class="message-head clearfix">
                        <div class="avatar pull-left"><a href="./index.php?qa=user&qa_1=Fynn"><img src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></a></div>
                        <div class="user-detail">
                          <h5 class="handle">Fynn</h5>
                          <div class="post-meta">
                            <div class="asker-meta">
                              <span class="qa-message-what"></span>
                              <span class="qa-message-when">
												<span class="qa-message-when-data">Oct 24, 2013</span>
											</span>
                              <span class="qa-message-who">
												<span class="qa-message-who-pad">by </span>
												<span class="qa-message-who-data"><a href="./index.php?qa=user&qa_1=Fynn">Fynn</a></span>
											</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="qa-message-content">
                        Nunc ante neque, feugiat at dictum ut, dignissim sed sapien. Pellentesque congue eu nisl sit amet cursus. Integer dapibus adipiscing metus ac vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div></div>

                  <div class="message-item" id="m1">
                    <div class="message-inner">
                      <div class="message-head clearfix">
                        <div class="avatar pull-left"><a href="./index.php?qa=user&qa_1=admin"><img src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></a></div>
                        <div class="user-detail">
                          <h5 class="handle">admin</h5>
                          <div class="post-meta">
                            <div class="asker-meta">
                              <span class="qa-message-what"></span>
                              <span class="qa-message-when">
												<span class="qa-message-when-data">Oct 24, 2013</span>
											</span>
                              <span class="qa-message-who">
												<span class="qa-message-who-pad">by </span>
												<span class="qa-message-who-data"><a href="./index.php?qa=user&qa_1=admin">admin</a></span>
											</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="qa-message-content">
                        Nunc ante neque, feugiat at dictum ut, dignissim sed sapien. Pellentesque congue eu nisl sit amet cursus. Integer dapibus adipiscing metus ac vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum iaculis mi, non dapibus nulla eleifend sed. Etiam ac commodo leo. Donec non sem id tellus mattis convallis. Morbi dapibus nulla ac dui lacinia,
                      </div>
                    </div></div>

                </div>
              </div>
            </b-tab>
          </b-tabs>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    data () {
      return {
        tabIndex: [0, 0],
        tabs: [
          'Dolby Orlando Event [802272]',
          'Related Records',
          'TimeLine']
      }
    }
  }
</script>
