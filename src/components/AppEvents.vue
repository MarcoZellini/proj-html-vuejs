<script>

export default {
    name: 'AppEvents'
}

</script>


<template>
    <div id="upcoming_events">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <div class="card">
                        <h3>upcoming events</h3>
                        <div class="event">
                            <div class="date">
                                <small class="day">07</small>
                                <!-- /.day -->
                                <small class="rest_of_date">jan, 2022</small>
                                <!-- /.rest_of_date -->
                            </div>
                            <div class="event_info">
                                <h6 class="event_name">Melbourne Coaching</h6>
                                <!-- /.event_name -->
                                <ul>
                                    <li class="full_date">
                                        <font-awesome-icon :icon="['far', 'clock']" />
                                        <span>9:00 ap - 5:00 pm, Jan 7, 2022</span>
                                    </li>
                                    <li class="location">
                                        <font-awesome-icon :icon="['fas', 'location-dot']" />
                                        <span>Cambridge, MA 02138, USA</span>
                                    </li>
                                    <li>
                                        <a href="#" class="more">read more</a>
                                    </li>
                                </ul>
                                <!-- /.more -->
                            </div>
                        </div>
                        <div class="event">
                            <div class="date">
                                <small class="day">11</small>
                                <!-- /.day -->
                                <small class="rest_of_date">jan, 2022</small>
                                <!-- /.rest_of_date -->
                            </div>
                            <div class="event_info">
                                <h6 class="event_name">new york coaching</h6>
                                <!-- /.event_name -->
                                <ul>
                                    <li class="full_date">
                                        <font-awesome-icon :icon="['far', 'clock']" />
                                        <span>9:00 ap - 5:00 pm, Jan 11, 2022</span>
                                    </li>
                                    <li class="location">
                                        <font-awesome-icon :icon="['fas', 'location-dot']" />
                                        <span>Cambridge, MA 02138, USA</span>
                                    </li>
                                    <li>
                                        <a href="#" class="more">read more</a>
                                    </li>
                                </ul>
                                <!-- /.more -->
                            </div>
                        </div>
                        <div class="event">
                            <div class="date">
                                <small class="day">21</small>
                                <!-- /.day -->
                                <small class="rest_of_date">jan, 2022</small>
                                <!-- /.rest_of_date -->
                            </div>
                            <div class="event_info">
                                <h6 class="event_name">london coaching</h6>
                                <!-- /.event_name -->
                                <ul>
                                    <li class="full_date">
                                        <font-awesome-icon :icon="['far', 'clock']" />
                                        <span>9:00 ap - 5:00 pm, Jan 21, 2022</span>
                                    </li>
                                    <li class="location">
                                        <font-awesome-icon :icon="['fas', 'location-dot']" />
                                        <span>Cambridge, MA 02138, USA</span>
                                    </li>
                                    <li>
                                        <a href="#" class="more">read more</a>
                                    </li>
                                </ul>
                                <!-- /.more -->
                            </div>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.col5 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </div>
</template>