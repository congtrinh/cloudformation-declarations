"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AWS;
(function (AWS) {
    var AmazonMQ;
    (function (AmazonMQ) {
        /**
         * A broker is a message broker environment running on
        Amazon MQ. It is the basic building block of Amazon MQ.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html
         */
        function Broker(props) {
            return Object.assign({ Type: 'AWS::AmazonMQ::Broker' }, props);
        }
        AmazonMQ.Broker = Broker;
    })(AmazonMQ = AWS.AmazonMQ || (AWS.AmazonMQ = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var AmazonMQ;
    (function (AmazonMQ) {
        /**
         * A configuration contains all of the settings for your
        ActiveMQ broker, in XML format.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html
         */
        function Configuration(props) {
            return Object.assign({ Type: 'AWS::AmazonMQ::Configuration' }, props);
        }
        AmazonMQ.Configuration = Configuration;
    })(AmazonMQ = AWS.AmazonMQ || (AWS.AmazonMQ = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::Account resource specifies the AWS Identity and Access Management  (IAM) role that Amazon
        API Gateway (API Gateway) uses to write API logs to Amazon CloudWatch Logs (CloudWatch
        Logs).
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html
         */
        function Account(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::Account' }, props);
        }
        ApiGateway.Account = Account;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::ApiKey resource creates a unique key that you can
        distribute to clients who are executing Amazon API Gateway (API Gateway) Method resources that
        require an API key. To specify which API key clients must use, map the API key with
        the
        RestApi and Stage resources that include the methods that require a
        key.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html
         */
        function ApiKey(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::ApiKey' }, props);
        }
        ApiGateway.ApiKey = ApiKey;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::Authorizer resource creates an authorization layer that Amazon API Gateway (API Gateway) activates
        for methods that have authorization enabled. API Gateway activates the authorizer
        when a client calls those methods.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html
         */
        function Authorizer(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::Authorizer' }, props);
        }
        ApiGateway.Authorizer = Authorizer;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::BasePathMapping resource creates a base path that clients who call your Amazon API Gateway API must
        use in the invocation URL.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html
         */
        function BasePathMapping(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::BasePathMapping' }, props);
        }
        ApiGateway.BasePathMapping = BasePathMapping;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::ClientCertificate resource creates a client certificate that Amazon API Gateway (API Gateway) uses
        to configure client-side SSL authentication for sending requests to the integration
        endpoint.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html
         */
        function ClientCertificate(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::ClientCertificate' }, props);
        }
        ApiGateway.ClientCertificate = ClientCertificate;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::Deployment resource deploys an Amazon API Gateway (API Gateway) RestApi resource to a stage so that clients can call the API over the Internet. The stage
        acts as an environment.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html
         */
        function Deployment(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::Deployment' }, props);
        }
        ApiGateway.Deployment = Deployment;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::DocumentationPart resource creates a documentation
        part for an Amazon API Gateway API entity. For more information, see  Representation of API Documentation in API Gateway in the
        API Gateway Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html
         */
        function DocumentationPart(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::DocumentationPart' }, props);
        }
        ApiGateway.DocumentationPart = DocumentationPart;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::DocumentationVersion resource creates a snapshot of
        the documentation for an Amazon API Gateway API entity. For more information, see
        Representation of API Documentation in API Gateway in the
        API Gateway Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html
         */
        function DocumentationVersion(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::DocumentationVersion' }, props);
        }
        ApiGateway.DocumentationVersion = DocumentationVersion;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::DomainName resource specifies a custom domain name for your API in Amazon API Gateway (API Gateway).
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html
         */
        function DomainName(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::DomainName' }, props);
        }
        ApiGateway.DomainName = DomainName;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The
        AWS::ApiGateway::GatewayResponse resource creates
        a custom response for your API Gateway API. For more information, see API Gateway Responses
            in the API Gateway Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html
         */
        function GatewayResponse(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::GatewayResponse' }, props);
        }
        ApiGateway.GatewayResponse = GatewayResponse;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::Method resource creates Amazon API Gateway (API Gateway) methods that define the parameters
        and body that clients must send in their requests.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html
         */
        function Method(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::Method' }, props);
        }
        ApiGateway.Method = Method;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::Model resource defines the structure of a request or response payload for an Amazon API
        Gateway (API Gateway) method.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html
         */
        function Model(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::Model' }, props);
        }
        ApiGateway.Model = Model;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::RequestValidator resource sets up basic validation rules for incoming
        requests to your API Gateway API.
        For more information, see
        
           Enable Basic Request Validation for an API in API Gateway in the API Gateway Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html
         */
        function RequestValidator(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::RequestValidator' }, props);
        }
        ApiGateway.RequestValidator = RequestValidator;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::Resource resource creates a resource in an Amazon API Gateway (API Gateway) API.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html
         */
        function Resource(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::Resource' }, props);
        }
        ApiGateway.Resource = Resource;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::RestApi resource contains a collection of Amazon API Gateway
        resources and methods that can be invoked through HTTPS endpoints. For more information,
        see
        restapi:create in the Amazon API Gateway REST API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html
         */
        function RestApi(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::RestApi' }, props);
        }
        ApiGateway.RestApi = RestApi;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::Stage resource creates a stage for an Amazon API Gateway (API Gateway) deployment.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html
         */
        function Stage(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::Stage' }, props);
        }
        ApiGateway.Stage = Stage;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::UsagePlan resource specifies a usage plan for deployed Amazon API Gateway (API Gateway) APIs.
        A usage plan enforces throttling and quota limits on individual client API keys. For
        more information, see Creating and Using API Usage Plans in Amazon API Gateway in the API Gateway Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html
         */
        function UsagePlan(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::UsagePlan' }, props);
        }
        ApiGateway.UsagePlan = UsagePlan;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::UsagePlanKey resource associates an Amazon API Gateway API key with
        an API Gateway usage plan. This association determines which users the usage plan
        is applied
        to.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html
         */
        function UsagePlanKey(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::UsagePlanKey' }, props);
        }
        ApiGateway.UsagePlanKey = UsagePlanKey;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApiGateway;
    (function (ApiGateway) {
        /**
         * The AWS::ApiGateway::VpcLink resource specifies an API Gateway VPC link for a
        AWS::ApiGateway::RestApi to access resources in an Amazon Virtual Private
        Cloud (VPC). For more information, see vpclink:create in the Amazon API Gateway REST API Reference
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html
         */
        function VpcLink(props) {
            return Object.assign({ Type: 'AWS::ApiGateway::VpcLink' }, props);
        }
        ApiGateway.VpcLink = VpcLink;
    })(ApiGateway = AWS.ApiGateway || (AWS.ApiGateway = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var AppSync;
    (function (AppSync) {
        /**
         * The
        AWS::AppSync::ApiKey resource creates a unique key that you can distribute to clients who are executing
        GraphQL operations with AWS AppSync that require an API key.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html
         */
        function ApiKey(props) {
            return Object.assign({ Type: 'AWS::AppSync::ApiKey' }, props);
        }
        AppSync.ApiKey = ApiKey;
    })(AppSync = AWS.AppSync || (AWS.AppSync = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var AppSync;
    (function (AppSync) {
        /**
         * The
        AWS::AppSync::DataSource resource creates data sources for resolvers in AWS AppSync to connect to, such as
        Amazon DynamoDB, AWS Lambda, and Amazon Elasticserach Service.
        Resolvers use these data sources to fetch data when clients make GraphQL calls.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html
         */
        function DataSource(props) {
            return Object.assign({ Type: 'AWS::AppSync::DataSource' }, props);
        }
        AppSync.DataSource = DataSource;
    })(AppSync = AWS.AppSync || (AWS.AppSync = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var AppSync;
    (function (AppSync) {
        /**
         * The
        AWS::AppSync::GraphQLApi resource will create a new AWS AppSync GraphQL API.
        This is the top level construct for your application. For more information see
        Quickstart Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html
         */
        function GraphQLApi(props) {
            return Object.assign({ Type: 'AWS::AppSync::GraphQLApi' }, props);
        }
        AppSync.GraphQLApi = GraphQLApi;
    })(AppSync = AWS.AppSync || (AWS.AppSync = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var AppSync;
    (function (AppSync) {
        /**
         * The
        AWS::AppSync::GraphQLSchema resource is used for your AWS AppSync GraphQL schema which
        controls the data model for your API. Schema files are text written in Schema Definition
        Language (SDL) format.
        You can find information on schema authoring at
        Designing a GraphQL API.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html
         */
        function GraphQLSchema(props) {
            return Object.assign({ Type: 'AWS::AppSync::GraphQLSchema' }, props);
        }
        AppSync.GraphQLSchema = GraphQLSchema;
    })(AppSync = AWS.AppSync || (AWS.AppSync = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var AppSync;
    (function (AppSync) {
        /**
         * The
        AWS::AppSync::Resolver resource defines the logical GraphQL resolver that you will attach to fields in a
        schema.
        Request and Response templates for resolvers are written in Apache Velocity Template
        Language (VTL) format.
        More information on resolvers can be found in the
        Resolver Mapping Template Reference.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html
         */
        function Resolver(props) {
            return Object.assign({ Type: 'AWS::AppSync::Resolver' }, props);
        }
        AppSync.Resolver = Resolver;
    })(AppSync = AWS.AppSync || (AWS.AppSync = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApplicationAutoScaling;
    (function (ApplicationAutoScaling) {
        /**
         * The AWS::ApplicationAutoScaling::ScalableTarget resource specifies a resource that Application Auto Scaling can scale up or down.
        For more information, see the RegisterScalableTarget action in the Application Auto Scaling API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html
         */
        function ScalableTarget(props) {
            return Object.assign({ Type: 'AWS::ApplicationAutoScaling::ScalableTarget' }, props);
        }
        ApplicationAutoScaling.ScalableTarget = ScalableTarget;
    })(ApplicationAutoScaling = AWS.ApplicationAutoScaling || (AWS.ApplicationAutoScaling = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ApplicationAutoScaling;
    (function (ApplicationAutoScaling) {
        /**
         * The AWS::ApplicationAutoScaling::ScalingPolicy resource defines an Application Auto Scaling scaling policy that Application Auto
        Scaling uses to adjust your application resources.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html
         */
        function ScalingPolicy(props) {
            return Object.assign({ Type: 'AWS::ApplicationAutoScaling::ScalingPolicy' }, props);
        }
        ApplicationAutoScaling.ScalingPolicy = ScalingPolicy;
    })(ApplicationAutoScaling = AWS.ApplicationAutoScaling || (AWS.ApplicationAutoScaling = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Athena;
    (function (Athena) {
        /**
         * The
        AWS::Athena::NamedQuery resource creates an Amazon Athena query. For more information, see
        CreateNamedQuery in the
        Amazon Athena Documentation.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html
         */
        function NamedQuery(props) {
            return Object.assign({ Type: 'AWS::Athena::NamedQuery' }, props);
        }
        Athena.NamedQuery = NamedQuery;
    })(Athena = AWS.Athena || (AWS.Athena = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var AutoScaling;
    (function (AutoScaling) {
        /**
         * Creates an Auto Scaling group.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html
         */
        function AutoScalingGroup(props) {
            return Object.assign({ Type: 'AWS::AutoScaling::AutoScalingGroup' }, props);
        }
        AutoScaling.AutoScalingGroup = AutoScalingGroup;
    })(AutoScaling = AWS.AutoScaling || (AWS.AutoScaling = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var AutoScaling;
    (function (AutoScaling) {
        /**
         * Creates an Auto Scaling launch configuration that can be used by an Auto Scaling group
        to configure
        Auto Scaling instances.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-launchconfig.html
         */
        function LaunchConfiguration(props) {
            return Object.assign({ Type: 'AWS::AutoScaling::LaunchConfiguration' }, props);
        }
        AutoScaling.LaunchConfiguration = LaunchConfiguration;
    })(AutoScaling = AWS.AutoScaling || (AWS.AutoScaling = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var AutoScaling;
    (function (AutoScaling) {
        /**
         * Controls the state of an instance in an Auto Scaling group after it is launched or
        terminated. When you use a lifecycle hook,
        the Auto Scaling group either pauses the instance after it is launched (before it
        is put into service) or pauses the instance
        as it is terminated (before it is fully terminated). For more information, see Amazon EC2 Auto Scaling Lifecycle Hooks in the Amazon EC2 Auto Scaling User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-lifecyclehook.html
         */
        function LifecycleHook(props) {
            return Object.assign({ Type: 'AWS::AutoScaling::LifecycleHook' }, props);
        }
        AutoScaling.LifecycleHook = LifecycleHook;
    })(AutoScaling = AWS.AutoScaling || (AWS.AutoScaling = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var AutoScaling;
    (function (AutoScaling) {
        /**
         * Adds a scaling policy to an Auto Scaling group. A scaling policy specifies whether
        to scale the Auto Scaling group up or down, and by how much.
        For more information, see Dynamic Scaling in the Amazon EC2 Auto Scaling User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-policy.html
         */
        function ScalingPolicy(props) {
            return Object.assign({ Type: 'AWS::AutoScaling::ScalingPolicy' }, props);
        }
        AutoScaling.ScalingPolicy = ScalingPolicy;
    })(AutoScaling = AWS.AutoScaling || (AWS.AutoScaling = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var AutoScaling;
    (function (AutoScaling) {
        /**
         * Creates a scheduled scaling action for an Auto Scaling group, changing the number
        of servers
        available for your application in response to predictable load changes.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html
         */
        function ScheduledAction(props) {
            return Object.assign({ Type: 'AWS::AutoScaling::ScheduledAction' }, props);
        }
        AutoScaling.ScheduledAction = ScheduledAction;
    })(AutoScaling = AWS.AutoScaling || (AWS.AutoScaling = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var AutoScalingPlans;
    (function (AutoScalingPlans) {
        /**
         * Creates a scaling plan for AWS Auto Scaling. For more information, see the AWS Auto Scaling User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscalingplans-scalingplan.html
         */
        function ScalingPlan(props) {
            return Object.assign({ Type: 'AWS::AutoScalingPlans::ScalingPlan' }, props);
        }
        AutoScalingPlans.ScalingPlan = ScalingPlan;
    })(AutoScalingPlans = AWS.AutoScalingPlans || (AWS.AutoScalingPlans = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Batch;
    (function (Batch) {
        /**
         * The AWS::Batch::ComputeEnvironment resource to define your AWS Batch compute
        environment. For more information, see Compute Environments in
        the AWS Batch User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-computeenvironment.html
         */
        function ComputeEnvironment(props) {
            return Object.assign({ Type: 'AWS::Batch::ComputeEnvironment' }, props);
        }
        Batch.ComputeEnvironment = ComputeEnvironment;
    })(Batch = AWS.Batch || (AWS.Batch = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Batch;
    (function (Batch) {
        /**
         * The AWS::Batch::JobDefinition resource specifies the parameters for an
        AWS Batch job definition. For more information, see Job Definitions in the
        AWS Batch User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html
         */
        function JobDefinition(props) {
            return Object.assign({ Type: 'AWS::Batch::JobDefinition' }, props);
        }
        Batch.JobDefinition = JobDefinition;
    })(Batch = AWS.Batch || (AWS.Batch = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Batch;
    (function (Batch) {
        /**
         * The AWS::Batch::JobQueue resource defines your AWS Batch job queue. For more
        information, see Job
           Queues in the AWS Batch User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html
         */
        function JobQueue(props) {
            return Object.assign({ Type: 'AWS::Batch::JobQueue' }, props);
        }
        Batch.JobQueue = JobQueue;
    })(Batch = AWS.Batch || (AWS.Batch = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Budgets;
    (function (Budgets) {
        /**
         * The AWS::Budgets::Budget resource creates, replaces, or deletes budgets for Billing and Cost Management. For
        more
        information, see Managing
           Your Costs with Budgets in the AWS Billing and Cost Management User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html
         */
        function Budget(props) {
            return Object.assign({ Type: 'AWS::Budgets::Budget' }, props);
        }
        Budgets.Budget = Budget;
    })(Budgets = AWS.Budgets || (AWS.Budgets = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CertificateManager;
    (function (CertificateManager) {
        /**
         * The AWS::CertificateManager::Certificate resource requests an AWS Certificate Manager
        (ACM) certificate that you can use with AWS services to enable secure connections.
        For
        example, you can deploy an ACM certificate to an Elastic Load Balancing load balancer
        to enable HTTPS
        support. For more information, see the RequestCertificate action
        in the AWS Certificate Manager API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-certificate.html
         */
        function Certificate(props) {
            return Object.assign({ Type: 'AWS::CertificateManager::Certificate' }, props);
        }
        CertificateManager.Certificate = Certificate;
    })(CertificateManager = AWS.CertificateManager || (AWS.CertificateManager = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Cloud9;
    (function (Cloud9) {
        /**
         * The AWS::Cloud9::EnvironmentEC2 resource creates an Amazon EC2 development
        environment in AWS Cloud9. For more information, see Creating an
           Environment in the AWS Cloud9 User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html
         */
        function EnvironmentEC2(props) {
            return Object.assign({ Type: 'AWS::Cloud9::EnvironmentEC2' }, props);
        }
        Cloud9.EnvironmentEC2 = EnvironmentEC2;
    })(Cloud9 = AWS.Cloud9 || (AWS.Cloud9 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CloudFormation;
    (function (CloudFormation) {
        /**
         * In an AWS CloudFormation template, you use the AWS::CloudFormation::CustomResource or Custom::String resource type to specify custom resources.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cfn-customresource.html
         */
        function CustomResource(props) {
            return Object.assign({ Type: 'AWS::CloudFormation::CustomResource' }, props);
        }
        CloudFormation.CustomResource = CustomResource;
    })(CloudFormation = AWS.CloudFormation || (AWS.CloudFormation = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CloudFormation;
    (function (CloudFormation) {
        /**
         * The AWS::CloudFormation::Stack type nests a stack as a resource in a top-level
        template.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html
         */
        function Stack(props) {
            return Object.assign({ Type: 'AWS::CloudFormation::Stack' }, props);
        }
        CloudFormation.Stack = Stack;
    })(CloudFormation = AWS.CloudFormation || (AWS.CloudFormation = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CloudFormation;
    (function (CloudFormation) {
        /**
         *
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html
         */
        function WaitCondition(props) {
            return Object.assign({ Type: 'AWS::CloudFormation::WaitCondition' }, props);
        }
        CloudFormation.WaitCondition = WaitCondition;
    })(CloudFormation = AWS.CloudFormation || (AWS.CloudFormation = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CloudFormation;
    (function (CloudFormation) {
        /**
         *
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitconditionhandle.html
         */
        function WaitConditionHandle(props) {
            return Object.assign({ Type: 'AWS::CloudFormation::WaitConditionHandle' }, props);
        }
        CloudFormation.WaitConditionHandle = WaitConditionHandle;
    })(CloudFormation = AWS.CloudFormation || (AWS.CloudFormation = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CloudFront;
    (function (CloudFront) {
        /**
         * The AWS::CloudFront::CloudFrontOriginAccessIdentity resource specifies the
        CloudFront origin access identity to associate with the origin of a CloudFront distribution.
        For more
        information, see OriginAccessIdentity in the Amazon CloudFront API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html
         */
        function CloudFrontOriginAccessIdentity(props) {
            return Object.assign({ Type: 'AWS::CloudFront::CloudFrontOriginAccessIdentity' }, props);
        }
        CloudFront.CloudFrontOriginAccessIdentity = CloudFrontOriginAccessIdentity;
    })(CloudFront = AWS.CloudFront || (AWS.CloudFront = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CloudFront;
    (function (CloudFront) {
        /**
         * Creates an Amazon CloudFront web distribution. For general information about CloudFront
        distributions, see
        the Introduction to Amazon CloudFront in
        the Amazon CloudFront Developer Guide. For specific information about creating CloudFront web
        distributions, see CreateDistribution in the Amazon CloudFront API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html
         */
        function Distribution(props) {
            return Object.assign({ Type: 'AWS::CloudFront::Distribution' }, props);
        }
        CloudFront.Distribution = Distribution;
    })(CloudFront = AWS.CloudFront || (AWS.CloudFront = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CloudFront;
    (function (CloudFront) {
        /**
         * The AWS::CloudFront::StreamingDistribution resource specifies an RMTP
        distribution for Amazon CloudFront. An RTMP distribution is similar to a web distribution,
        but an RTMP
        distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP)
        instead of
        serving files using HTTP. For more information, see CreateStreamingDistribution in
        the Amazon CloudFront API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-streamingdistribution.html
         */
        function StreamingDistribution(props) {
            return Object.assign({ Type: 'AWS::CloudFront::StreamingDistribution' }, props);
        }
        CloudFront.StreamingDistribution = StreamingDistribution;
    })(CloudFront = AWS.CloudFront || (AWS.CloudFront = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CloudTrail;
    (function (CloudTrail) {
        /**
         * Use the AWS::CloudTrail::Trail resource to create a trail and specify where
        logs are published. An AWS CloudTrail (CloudTrail) trail can capture AWS API calls
        made by your AWS account
        and publish the logs to an Amazon S3 bucket. For more information, see What is AWS CloudTrail? in the
        AWS CloudTrail User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html
         */
        function Trail(props) {
            return Object.assign({ Type: 'AWS::CloudTrail::Trail' }, props);
        }
        CloudTrail.Trail = Trail;
    })(CloudTrail = AWS.CloudTrail || (AWS.CloudTrail = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CloudWatch;
    (function (CloudWatch) {
        /**
         * The AWS::CloudWatch::Alarm type creates a CloudWatch alarm.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cw-alarm.html
         */
        function Alarm(props) {
            return Object.assign({ Type: 'AWS::CloudWatch::Alarm' }, props);
        }
        CloudWatch.Alarm = Alarm;
    })(CloudWatch = AWS.CloudWatch || (AWS.CloudWatch = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CloudWatch;
    (function (CloudWatch) {
        /**
         *
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html
         */
        function Dashboard(props) {
            return Object.assign({ Type: 'AWS::CloudWatch::Dashboard' }, props);
        }
        CloudWatch.Dashboard = Dashboard;
    })(CloudWatch = AWS.CloudWatch || (AWS.CloudWatch = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CodeBuild;
    (function (CodeBuild) {
        /**
         * The AWS::CodeBuild::Project resource configures how AWS CodeBuild builds your source
        code. For example, it tells AWS CodeBuild where to get the source code and which build
        environment to
        use.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-project.html
         */
        function Project(props) {
            return Object.assign({ Type: 'AWS::CodeBuild::Project' }, props);
        }
        CodeBuild.Project = Project;
    })(CodeBuild = AWS.CodeBuild || (AWS.CodeBuild = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CodeCommit;
    (function (CodeCommit) {
        /**
         * The AWS::CodeCommit::Repository resource creates an AWS CodeCommit repository that is
        hosted by Amazon Web Services. For more information, see Create an AWS CodeCommit Repository in the
        AWS CodeCommit User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html
         */
        function Repository(props) {
            return Object.assign({ Type: 'AWS::CodeCommit::Repository' }, props);
        }
        CodeCommit.Repository = Repository;
    })(CodeCommit = AWS.CodeCommit || (AWS.CodeCommit = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CodeDeploy;
    (function (CodeDeploy) {
        /**
         * The AWS::CodeDeploy::Application resource creates an AWS CodeDeploy application. In AWS CodeDeploy, an application
        is a name that functions as a container
        to ensure that the correct combination of revision, deployment configuration, and
        deployment group are referenced during a deployment.
        You can use the AWS::CodeDeploy::DeploymentGroup resource to associate the application with an AWS CodeDeploy deployment group.
        For more information, see AWS CodeDeploy Deployments in the AWS CodeDeploy User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html
         */
        function Application(props) {
            return Object.assign({ Type: 'AWS::CodeDeploy::Application' }, props);
        }
        CodeDeploy.Application = Application;
    })(CodeDeploy = AWS.CodeDeploy || (AWS.CodeDeploy = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CodeDeploy;
    (function (CodeDeploy) {
        /**
         * The AWS::CodeDeploy::DeploymentConfig resource creates a set of deployment
        rules, deployment success conditions, and deployment failure conditions that AWS CodeDeploy
        uses during a
        deployment. The deployment configuration specifies, through the use of a MinimumHealthyHosts value,
        the number or percentage of instances that must remain available at any time during
        a deployment.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html
         */
        function DeploymentConfig(props) {
            return Object.assign({ Type: 'AWS::CodeDeploy::DeploymentConfig' }, props);
        }
        CodeDeploy.DeploymentConfig = DeploymentConfig;
    })(CodeDeploy = AWS.CodeDeploy || (AWS.CodeDeploy = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CodeDeploy;
    (function (CodeDeploy) {
        /**
         * The AWS::CodeDeploy::DeploymentGroup resource creates an AWS CodeDeploy deployment
        group that specifies which instances your application revisions are deployed to, along
        with other deployment options.
        For more information, see CreateDeploymentGroup in the AWS CodeDeploy API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html
         */
        function DeploymentGroup(props) {
            return Object.assign({ Type: 'AWS::CodeDeploy::DeploymentGroup' }, props);
        }
        CodeDeploy.DeploymentGroup = DeploymentGroup;
    })(CodeDeploy = AWS.CodeDeploy || (AWS.CodeDeploy = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CodePipeline;
    (function (CodePipeline) {
        /**
         * The AWS::CodePipeline::CustomActionType resource creates a custom action for
        activities that aren't included in the AWS CodePipeline default actions, such as running
        an internally
        developed build process or a test suite. You can use these custom actions in the stage
        of a
        pipeline. For more information,
        see Create and Add a Custom Action
           in AWS CodePipeline in the AWS CodePipeline User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html
         */
        function CustomActionType(props) {
            return Object.assign({ Type: 'AWS::CodePipeline::CustomActionType' }, props);
        }
        CodePipeline.CustomActionType = CustomActionType;
    })(CodePipeline = AWS.CodePipeline || (AWS.CodePipeline = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CodePipeline;
    (function (CodePipeline) {
        /**
         * The AWS::CodePipeline::Pipeline resource creates an AWS CodePipeline pipeline that
        describes how software changes go through a release process. For more information,
        see What Is AWS CodePipeline? in the
        AWS CodePipeline User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html
         */
        function Pipeline(props) {
            return Object.assign({ Type: 'AWS::CodePipeline::Pipeline' }, props);
        }
        CodePipeline.Pipeline = Pipeline;
    })(CodePipeline = AWS.CodePipeline || (AWS.CodePipeline = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var CodePipeline;
    (function (CodePipeline) {
        /**
         * The AWS::CodePipeline::Webhook resource creates and registers your webhook.
        After the webhook is created and registered, it triggers your pipeline to start every
        time an
        external event occurs. For more information, see Configure Your GitHub Pipelines to Use
           Webhooks for Change Detection in the AWS CodePipeline User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html
         */
        function Webhook(props) {
            return Object.assign({ Type: 'AWS::CodePipeline::Webhook' }, props);
        }
        CodePipeline.Webhook = Webhook;
    })(CodePipeline = AWS.CodePipeline || (AWS.CodePipeline = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Cognito;
    (function (Cognito) {
        /**
         * The AWS::Cognito::IdentityPool resource creates an Amazon Cognito
        identity
        pool.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html
         */
        function IdentityPool(props) {
            return Object.assign({ Type: 'AWS::Cognito::IdentityPool' }, props);
        }
        Cognito.IdentityPool = IdentityPool;
    })(Cognito = AWS.Cognito || (AWS.Cognito = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Cognito;
    (function (Cognito) {
        /**
         * The AWS::Cognito::IdentityPoolRoleAttachment resource manages the role configuration for an Amazon Cognito identity pool.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html
         */
        function IdentityPoolRoleAttachment(props) {
            return Object.assign({ Type: 'AWS::Cognito::IdentityPoolRoleAttachment' }, props);
        }
        Cognito.IdentityPoolRoleAttachment = IdentityPoolRoleAttachment;
    })(Cognito = AWS.Cognito || (AWS.Cognito = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Cognito;
    (function (Cognito) {
        /**
         * The AWS::Cognito::UserPool resource creates an Amazon Cognito user pool. For more information on working
        with Amazon Cognito user pools, see Amazon Cognito User
           Pools and CreateUserPool.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html
         */
        function UserPool(props) {
            return Object.assign({ Type: 'AWS::Cognito::UserPool' }, props);
        }
        Cognito.UserPool = UserPool;
    })(Cognito = AWS.Cognito || (AWS.Cognito = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Cognito;
    (function (Cognito) {
        /**
         * The AWS::Cognito::UserPoolClient resource creates an Amazon Cognito user pool client.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html
         */
        function UserPoolClient(props) {
            return Object.assign({ Type: 'AWS::Cognito::UserPoolClient' }, props);
        }
        Cognito.UserPoolClient = UserPoolClient;
    })(Cognito = AWS.Cognito || (AWS.Cognito = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Cognito;
    (function (Cognito) {
        /**
         * The AWS::Cognito::UserPoolGroup resource creates a user group in an Amazon Cognito user pool.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html
         */
        function UserPoolGroup(props) {
            return Object.assign({ Type: 'AWS::Cognito::UserPoolGroup' }, props);
        }
        Cognito.UserPoolGroup = UserPoolGroup;
    })(Cognito = AWS.Cognito || (AWS.Cognito = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Cognito;
    (function (Cognito) {
        /**
         * The AWS::Cognito::UserPoolUser resource creates an Amazon Cognito user pool user.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html
         */
        function UserPoolUser(props) {
            return Object.assign({ Type: 'AWS::Cognito::UserPoolUser' }, props);
        }
        Cognito.UserPoolUser = UserPoolUser;
    })(Cognito = AWS.Cognito || (AWS.Cognito = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Cognito;
    (function (Cognito) {
        /**
         * The AWS::Cognito::UserPoolUserToGroupAttachment resource attaches a user to an Amazon Cognito user pool user group.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html
         */
        function UserPoolUserToGroupAttachment(props) {
            return Object.assign({ Type: 'AWS::Cognito::UserPoolUserToGroupAttachment' }, props);
        }
        Cognito.UserPoolUserToGroupAttachment = UserPoolUserToGroupAttachment;
    })(Cognito = AWS.Cognito || (AWS.Cognito = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Config;
    (function (Config) {
        /**
         * The
        AWS::Config::AggregationAuthorization resource to grant permission to an aggregator account to collect your AWS Config
        data.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html
         */
        function AggregationAuthorization(props) {
            return Object.assign({ Type: 'AWS::Config::AggregationAuthorization' }, props);
        }
        Config.AggregationAuthorization = AggregationAuthorization;
    })(Config = AWS.Config || (AWS.Config = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Config;
    (function (Config) {
        /**
         * The AWS::Config::ConfigRule resource uses an AWS Lambda (Lambda) function that
        evaluates configuration items to assess whether your AWS resources comply with your
        specified
        configurations. This function can run when AWS Config detects a configuration change
        or delivers a
        configuration snapshot. The resources this function evaluates must be in the recording
        group.
        For more information, see Evaluating AWS Resource
           Configurations with AWS Config in the AWS Config Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html
         */
        function ConfigRule(props) {
            return Object.assign({ Type: 'AWS::Config::ConfigRule' }, props);
        }
        Config.ConfigRule = ConfigRule;
    })(Config = AWS.Config || (AWS.Config = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Config;
    (function (Config) {
        /**
         * The
        AWS::Config::ConfigurationAggregator resource is an AWS Config resource type that collects AWS Config data from multiple
        accounts and regions. Use an aggregator to view the resource configuration and compliance
        data recorded in AWS Config for multiple accounts and regions.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html
         */
        function ConfigurationAggregator(props) {
            return Object.assign({ Type: 'AWS::Config::ConfigurationAggregator' }, props);
        }
        Config.ConfigurationAggregator = ConfigurationAggregator;
    })(Config = AWS.Config || (AWS.Config = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Config;
    (function (Config) {
        /**
         * The AWS::Config::ConfigurationRecorder resource describes the AWS resource
        types for which AWS Config records configuration changes. The configuration recorder
        stores the
        configurations of the supported resources in your account as configuration items.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html
         */
        function ConfigurationRecorder(props) {
            return Object.assign({ Type: 'AWS::Config::ConfigurationRecorder' }, props);
        }
        Config.ConfigurationRecorder = ConfigurationRecorder;
    })(Config = AWS.Config || (AWS.Config = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Config;
    (function (Config) {
        /**
         * The AWS::Config::DeliveryChannel resource describes where AWS Config sends
        notifications and updated configuration states for AWS resources.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html
         */
        function DeliveryChannel(props) {
            return Object.assign({ Type: 'AWS::Config::DeliveryChannel' }, props);
        }
        Config.DeliveryChannel = DeliveryChannel;
    })(Config = AWS.Config || (AWS.Config = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DAX;
    (function (DAX) {
        /**
         * Use the AWS::DAX::Cluster resource to create a DAX cluster for use
        with Amazon DynamoDB.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html
         */
        function Cluster(props) {
            return Object.assign({ Type: 'AWS::DAX::Cluster' }, props);
        }
        DAX.Cluster = Cluster;
    })(DAX = AWS.DAX || (AWS.DAX = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DAX;
    (function (DAX) {
        /**
         * Use the AWS CloudFormation AWS::DAX::ParameterGroup resource to create a parameter group
        for use with Amazon DynamoDB.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html
         */
        function ParameterGroup(props) {
            return Object.assign({ Type: 'AWS::DAX::ParameterGroup' }, props);
        }
        DAX.ParameterGroup = ParameterGroup;
    })(DAX = AWS.DAX || (AWS.DAX = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DAX;
    (function (DAX) {
        /**
         * Use the AWS CloudFormation AWS::DAX::SubnetGroup resource to create a subnet group for use
        with DAX (DynamoDB Accelerator).
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html
         */
        function SubnetGroup(props) {
            return Object.assign({ Type: 'AWS::DAX::SubnetGroup' }, props);
        }
        DAX.SubnetGroup = SubnetGroup;
    })(DAX = AWS.DAX || (AWS.DAX = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DMS;
    (function (DMS) {
        /**
         * The AWS::DMS::Certificate resource creates an SSL certificate that encrypts connections between AWS DMS endpoints
        and the replication instance.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html
         */
        function Certificate(props) {
            return Object.assign({ Type: 'AWS::DMS::Certificate' }, props);
        }
        DMS.Certificate = Certificate;
    })(DMS = AWS.DMS || (AWS.DMS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DMS;
    (function (DMS) {
        /**
         * The AWS::DMS::Endpoint resource creates an AWS DMS endpoint.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html
         */
        function Endpoint(props) {
            return Object.assign({ Type: 'AWS::DMS::Endpoint' }, props);
        }
        DMS.Endpoint = Endpoint;
    })(DMS = AWS.DMS || (AWS.DMS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DMS;
    (function (DMS) {
        /**
         * Use the AWS::DMS::EventSubscription resource to get notifications for
        AWS Database Migration Service events through the Amazon Simple Notification Service.
        For more information, see Using AWS DMS Event Notification in the
        AWS Database Migration Service User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html
         */
        function EventSubscription(props) {
            return Object.assign({ Type: 'AWS::DMS::EventSubscription' }, props);
        }
        DMS.EventSubscription = EventSubscription;
    })(DMS = AWS.DMS || (AWS.DMS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DMS;
    (function (DMS) {
        /**
         * The AWS::DMS::ReplicationInstance resource creates an AWS DMS replication instance.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html
         */
        function ReplicationInstance(props) {
            return Object.assign({ Type: 'AWS::DMS::ReplicationInstance' }, props);
        }
        DMS.ReplicationInstance = ReplicationInstance;
    })(DMS = AWS.DMS || (AWS.DMS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DMS;
    (function (DMS) {
        /**
         *
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html
         */
        function ReplicationSubnetGroup(props) {
            return Object.assign({ Type: 'AWS::DMS::ReplicationSubnetGroup' }, props);
        }
        DMS.ReplicationSubnetGroup = ReplicationSubnetGroup;
    })(DMS = AWS.DMS || (AWS.DMS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DMS;
    (function (DMS) {
        /**
         * The AWS::DMS::ReplicationTask resource creates an AWS DMS replication task.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html
         */
        function ReplicationTask(props) {
            return Object.assign({ Type: 'AWS::DMS::ReplicationTask' }, props);
        }
        DMS.ReplicationTask = ReplicationTask;
    })(DMS = AWS.DMS || (AWS.DMS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DataPipeline;
    (function (DataPipeline) {
        /**
         * Creates a data pipeline that you can use to automate the movement and transformation
        of
        data. In each pipeline, you define pipeline objects, such as activities, schedules,
        data nodes,
        and resources. For information about pipeline objects and components that you can
        use, see
        Pipeline Object Reference in the
        AWS Data Pipeline Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html
         */
        function Pipeline(props) {
            return Object.assign({ Type: 'AWS::DataPipeline::Pipeline' }, props);
        }
        DataPipeline.Pipeline = Pipeline;
    })(DataPipeline = AWS.DataPipeline || (AWS.DataPipeline = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DirectoryService;
    (function (DirectoryService) {
        /**
         * The AWS::DirectoryService::MicrosoftAD resource creates a Microsoft Active
        Directory in AWS so that your directory users and groups can access the AWS Management
        Console and AWS
        applications using their existing credentials. For more information, see What Is AWS Directory Service? in the
        AWS Directory Service Administration Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html
         */
        function MicrosoftAD(props) {
            return Object.assign({ Type: 'AWS::DirectoryService::MicrosoftAD' }, props);
        }
        DirectoryService.MicrosoftAD = MicrosoftAD;
    })(DirectoryService = AWS.DirectoryService || (AWS.DirectoryService = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DirectoryService;
    (function (DirectoryService) {
        /**
         * The AWS::DirectoryService::SimpleAD resource creates an AWS Directory Service Simple Active
        Directory (Simple AD) in AWS so that your directory users and groups can access the
        AWS Management Console
        and AWS applications using their existing credentials. Simple AD is a Microsoft Active
        Directory–compatible directory. For more information, see What Is
           AWS Directory Service? in the AWS Directory Service Administration Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html
         */
        function SimpleAD(props) {
            return Object.assign({ Type: 'AWS::DirectoryService::SimpleAD' }, props);
        }
        DirectoryService.SimpleAD = SimpleAD;
    })(DirectoryService = AWS.DirectoryService || (AWS.DirectoryService = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var DynamoDB;
    (function (DynamoDB) {
        /**
         * The AWS::DynamoDB::Table resource creates a DynamoDB table. For more information, see CreateTable in the Amazon DynamoDB API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html
         */
        function Table(props) {
            return Object.assign({ Type: 'AWS::DynamoDB::Table' }, props);
        }
        DynamoDB.Table = Table;
    })(DynamoDB = AWS.DynamoDB || (AWS.DynamoDB = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Provides information to AWS about your VPN customer gateway device.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customer-gateway.html
         */
        function CustomerGateway(props) {
            return Object.assign({ Type: 'AWS::EC2::CustomerGateway' }, props);
        }
        EC2.CustomerGateway = CustomerGateway;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Creates a set of DHCP options for your VPC.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcp-options.html
         */
        function DHCPOptions(props) {
            return Object.assign({ Type: 'AWS::EC2::DHCPOptions' }, props);
        }
        EC2.DHCPOptions = DHCPOptions;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::EIP resource allocates an Elastic IP (EIP) address and can, optionally,
        associate it with an Amazon EC2 instance.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip.html
         */
        function EIP(props) {
            return Object.assign({ Type: 'AWS::EC2::EIP' }, props);
        }
        EC2.EIP = EIP;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::EIPAssociation resource type associates an Elastic IP address with an
        Amazon EC2
        instance. The Elastic IP address can be an existing Elastic IP address or an Elastic
        IP
        address allocated through an AWS::EC2::EIP
           resource.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html
         */
        function EIPAssociation(props) {
            return Object.assign({ Type: 'AWS::EC2::EIPAssociation' }, props);
        }
        EC2.EIPAssociation = EIPAssociation;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::EgressOnlyInternetGateway resource creates an egress-only
        Internet gateway for your VPC (over IPv6 only). An egress-only Internet gateway enables
        outbound communication over IPv6 from instances in your VPC to the Internet. It also
        prevents
        hosts outside of your VPC from initiating an IPv6 connection with your instance.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-egressonlyinternetgateway.html
         */
        function EgressOnlyInternetGateway(props) {
            return Object.assign({ Type: 'AWS::EC2::EgressOnlyInternetGateway' }, props);
        }
        EC2.EgressOnlyInternetGateway = EgressOnlyInternetGateway;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::FlowLog resource creates an Amazon Elastic Compute Cloud (Amazon EC2) flow log that captures
        IP traffic for a specified network interface, subnet, or VPC. To view the log data,
        use Amazon CloudWatch Logs (CloudWatch Logs) to help troubleshoot connection issues.
        For example, you can use a flow log to investigate why certain traffic isn't reaching
        an instance, which can help you diagnose overly restrictive security group rules.
        For more information, see VPC Flow
           Logs in the Amazon VPC User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html
         */
        function FlowLog(props) {
            return Object.assign({ Type: 'AWS::EC2::FlowLog' }, props);
        }
        EC2.FlowLog = FlowLog;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::Host resource allocates a fully dedicated physical server for launching EC2 instances.
        Because the host is fully dedicated for your use, it can help you address compliance
        requirements and reduce costs by allowing you to use your existing server-bound software
        licenses. For more information, see Dedicated Hosts in the Amazon EC2 User Guide for Linux Instances.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html
         */
        function Host(props) {
            return Object.assign({ Type: 'AWS::EC2::Host' }, props);
        }
        EC2.Host = Host;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::Instance resource creates an EC2  instance.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html
         */
        function Instance(props) {
            return Object.assign({ Type: 'AWS::EC2::Instance' }, props);
        }
        EC2.Instance = Instance;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Creates a new Internet gateway in your AWS account. After creating the Internet gateway,
        you then attach it to
        a VPC.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internetgateway.html
         */
        function InternetGateway(props) {
            return Object.assign({ Type: 'AWS::EC2::InternetGateway' }, props);
        }
        EC2.InternetGateway = InternetGateway;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::LaunchTemplate resource creates a launch template for an
        Amazon EC2 instance. A launch template contains the parameters to launch an instance.
        For more
        information, see CreateLaunchTemplate in the Amazon EC2 API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html
         */
        function LaunchTemplate(props) {
            return Object.assign({ Type: 'AWS::EC2::LaunchTemplate' }, props);
        }
        EC2.LaunchTemplate = LaunchTemplate;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::NatGateway resource creates a network address translation (NAT)
        gateway in the specified public subnet. Use a NAT gateway to allow instances in a
        private subnet
        to connect to the Internet or to other AWS services, but prevent the Internet from
        initiating a
        connection with those instances. For more information and a sample architectural diagram,
        see
        NAT Gateways in the
        Amazon VPC User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html
         */
        function NatGateway(props) {
            return Object.assign({ Type: 'AWS::EC2::NatGateway' }, props);
        }
        EC2.NatGateway = NatGateway;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Creates a new network ACL in a VPC.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-acl.html
         */
        function NetworkAcl(props) {
            return Object.assign({ Type: 'AWS::EC2::NetworkAcl' }, props);
        }
        EC2.NetworkAcl = NetworkAcl;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Creates an entry (i.e., a rule) in a network ACL with a rule number you specify. Each
        network ACL has a set of numbered ingress rules and a separate set of numbered egress
        rules.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-acl-entry.html
         */
        function NetworkAclEntry(props) {
            return Object.assign({ Type: 'AWS::EC2::NetworkAclEntry' }, props);
        }
        EC2.NetworkAclEntry = NetworkAclEntry;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Describes a network interface in an Elastic Compute Cloud (EC2) instance for AWS CloudFormation.
        This is provided in a list
        in the NetworkInterfaces property of AWS::EC2::Instance.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface.html
         */
        function NetworkInterface(props) {
            return Object.assign({ Type: 'AWS::EC2::NetworkInterface' }, props);
        }
        EC2.NetworkInterface = NetworkInterface;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Attaches an elastic network interface (ENI) to an Amazon EC2 instance. You can use
        this resource
        type to attach additional network interfaces to an instances without interruption.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html
         */
        function NetworkInterfaceAttachment(props) {
            return Object.assign({ Type: 'AWS::EC2::NetworkInterfaceAttachment' }, props);
        }
        EC2.NetworkInterfaceAttachment = NetworkInterfaceAttachment;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The
        AWS::EC2::NetworkInterfacePermission resource specifies a permission for an Amazon EC2 network interface. For example,
        you can grant
        an AWS authorized partner account permission to attach the specified network interface
        to an instance in their account. For more information, see CreateNetworkInterfacePermission and NetworkInterfacePermission in the
        Amazon EC2 API Reference.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html
         */
        function NetworkInterfacePermission(props) {
            return Object.assign({ Type: 'AWS::EC2::NetworkInterfacePermission' }, props);
        }
        EC2.NetworkInterfacePermission = NetworkInterfacePermission;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::PlacementGroup resource is a logical grouping of instances
        within a single Availability Zone (AZ) that enables applications to participate in
        a
        low-latency, 10 Gbps network. You create a placement group first, and then you can
        launch
        instances in the placement group.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-placementgroup.html
         */
        function PlacementGroup(props) {
            return Object.assign({ Type: 'AWS::EC2::PlacementGroup' }, props);
        }
        EC2.PlacementGroup = PlacementGroup;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::Route resource creates a new route in a route table within a
        VPC. The route's target can be either a gateway attached to the VPC or a NAT instance
        in the
        VPC.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html
         */
        function Route(props) {
            return Object.assign({ Type: 'AWS::EC2::Route' }, props);
        }
        EC2.Route = Route;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Creates a new route table within a VPC. After you create a new route table, you can
        add routes and
        associate the table with a subnet.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route-table.html
         */
        function RouteTable(props) {
            return Object.assign({ Type: 'AWS::EC2::RouteTable' }, props);
        }
        EC2.RouteTable = RouteTable;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Creates an Amazon EC2 security group. To create a VPC security group, use the VpcId property.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html
         */
        function SecurityGroup(props) {
            return Object.assign({ Type: 'AWS::EC2::SecurityGroup' }, props);
        }
        EC2.SecurityGroup = SecurityGroup;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::SecurityGroupEgress resource adds an egress rule to an Amazon VPC
        security group. When you use the AWS::EC2::SecurityGroupEgress resource, the default rule is removed from the
        security group.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-security-group-egress.html
         */
        function SecurityGroupEgress(props) {
            return Object.assign({ Type: 'AWS::EC2::SecurityGroupEgress' }, props);
        }
        EC2.SecurityGroupEgress = SecurityGroupEgress;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::SecurityGroupIngress resource adds an ingress rule to an Amazon EC2
        or Amazon VPC security group.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group-ingress.html
         */
        function SecurityGroupIngress(props) {
            return Object.assign({ Type: 'AWS::EC2::SecurityGroupIngress' }, props);
        }
        EC2.SecurityGroupIngress = SecurityGroupIngress;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::SpotFleet resource creates a request for a collection of Spot
        instances. The Spot fleet attempts to launch the number of Spot instances to meet
        the target
        capacity that you specified. For more information, see Spot Instances in the
        Amazon EC2 User Guide for Linux Instances.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-spotfleet.html
         */
        function SpotFleet(props) {
            return Object.assign({ Type: 'AWS::EC2::SpotFleet' }, props);
        }
        EC2.SpotFleet = SpotFleet;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Creates a subnet in an existing VPC.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html
         */
        function Subnet(props) {
            return Object.assign({ Type: 'AWS::EC2::Subnet' }, props);
        }
        EC2.Subnet = Subnet;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::SubnetCidrBlock resource associates a single IPv6 CIDR block
        with an Amazon VPC subnet.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html
         */
        function SubnetCidrBlock(props) {
            return Object.assign({ Type: 'AWS::EC2::SubnetCidrBlock' }, props);
        }
        EC2.SubnetCidrBlock = SubnetCidrBlock;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Associates a subnet with a network ACL. For more information, see ReplaceNetworkAclAssociation in the Amazon EC2 API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-network-acl-assoc.html
         */
        function SubnetNetworkAclAssociation(props) {
            return Object.assign({ Type: 'AWS::EC2::SubnetNetworkAclAssociation' }, props);
        }
        EC2.SubnetNetworkAclAssociation = SubnetNetworkAclAssociation;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Associates a subnet with a route table.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-route-table-assoc.html
         */
        function SubnetRouteTableAssociation(props) {
            return Object.assign({ Type: 'AWS::EC2::SubnetRouteTableAssociation' }, props);
        }
        EC2.SubnetRouteTableAssociation = SubnetRouteTableAssociation;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         *
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trunkinterfaceassociation.html
         */
        function TrunkInterfaceAssociation(props) {
            return Object.assign({ Type: 'AWS::EC2::TrunkInterfaceAssociation' }, props);
        }
        EC2.TrunkInterfaceAssociation = TrunkInterfaceAssociation;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Creates a Virtual Private Cloud (VPC) with the CIDR block that you specify. To name
        a VPC resource, use the Tags property and specify a value for the Name key.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html
         */
        function VPC(props) {
            return Object.assign({ Type: 'AWS::EC2::VPC' }, props);
        }
        EC2.VPC = VPC;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::VPCCidrBlock resource associates a single Amazon-provided IPv6
        CIDR block or a single user-specified IPv4 CIDR block with a Virtual Private Cloud
        (VPC).
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html
         */
        function VPCCidrBlock(props) {
            return Object.assign({ Type: 'AWS::EC2::VPCCidrBlock' }, props);
        }
        EC2.VPCCidrBlock = VPCCidrBlock;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Associates a set of DHCP options (that you've previously created) with the specified
        VPC.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-dhcp-options-assoc.html
         */
        function VPCDHCPOptionsAssociation(props) {
            return Object.assign({ Type: 'AWS::EC2::VPCDHCPOptionsAssociation' }, props);
        }
        EC2.VPCDHCPOptionsAssociation = VPCDHCPOptionsAssociation;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Creates a VPC endpoint that you can use to establish a private connection between
        your VPC
        and another AWS service without requiring access over the Internet, a VPN connection,
        or AWS Direct Connect.
        For more information, see CreateVpcEndpoint.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html
         */
        function VPCEndpoint(props) {
            return Object.assign({ Type: 'AWS::EC2::VPCEndpoint' }, props);
        }
        EC2.VPCEndpoint = VPCEndpoint;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Creates a connection notification for the specified VPC endpoint or VPC endpoint service.
        A connection notification
        notifies you of specific endpoint events. You must create an SNS topic to receive
        notifications. For more information,
        see CreateVpcEndpointConnectionNotification.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html
         */
        function VPCEndpointConnectionNotification(props) {
            return Object.assign({ Type: 'AWS::EC2::VPCEndpointConnectionNotification' }, props);
        }
        EC2.VPCEndpointConnectionNotification = VPCEndpointConnectionNotification;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Grant or revoke permissions for service consumers (IAM users, IAM roles, and AWS accounts)
        to connect to the
        VPC endpoint service. For more information, see ModifyVpcEndpointServicePermissions in the Amazon EC2 API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html
         */
        function VPCEndpointServicePermissions(props) {
            return Object.assign({ Type: 'AWS::EC2::VPCEndpointServicePermissions' }, props);
        }
        EC2.VPCEndpointServicePermissions = VPCEndpointServicePermissions;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Attaches a gateway to a VPC.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html
         */
        function VPCGatewayAttachment(props) {
            return Object.assign({ Type: 'AWS::EC2::VPCGatewayAttachment' }, props);
        }
        EC2.VPCGatewayAttachment = VPCGatewayAttachment;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * A VPC peering connection enables a network connection between two virtual private
        clouds
        (VPCs) so that you can route traffic between them using a private IP address. For
        more
        information about VPC peering and its limitations, see VPC Peering Overview in the
        Amazon VPC Peering Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html
         */
        function VPCPeeringConnection(props) {
            return Object.assign({ Type: 'AWS::EC2::VPCPeeringConnection' }, props);
        }
        EC2.VPCPeeringConnection = VPCPeeringConnection;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Creates a new VPN connection between an existing virtual private gateway and a VPN
        customer
        gateway.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-connection.html
         */
        function VPNConnection(props) {
            return Object.assign({ Type: 'AWS::EC2::VPNConnection' }, props);
        }
        EC2.VPNConnection = VPNConnection;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * A static route that is associated with a VPN connection between an existing virtual
        private
        gateway and a VPN customer gateway. The static route allows traffic to be routed from
        the
        virtual private gateway to the VPN customer gateway.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-connection-route.html
         */
        function VPNConnectionRoute(props) {
            return Object.assign({ Type: 'AWS::EC2::VPNConnectionRoute' }, props);
        }
        EC2.VPNConnectionRoute = VPNConnectionRoute;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Creates a virtual private gateway. A virtual private gateway is the VPC-side endpoint
        for
        your VPN connection.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gateway.html
         */
        function VPNGateway(props) {
            return Object.assign({ Type: 'AWS::EC2::VPNGateway' }, props);
        }
        EC2.VPNGateway = VPNGateway;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Enables a virtual private gateway (VGW) to propagate routes to the routing tables
        of a
        VPC.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gatewayrouteprop.html
         */
        function VPNGatewayRoutePropagation(props) {
            return Object.assign({ Type: 'AWS::EC2::VPNGatewayRoutePropagation' }, props);
        }
        EC2.VPNGatewayRoutePropagation = VPNGatewayRoutePropagation;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * The AWS::EC2::Volume type creates a new Amazon Elastic Block Store (Amazon EBS) volume.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volume.html
         */
        function Volume(props) {
            return Object.assign({ Type: 'AWS::EC2::Volume' }, props);
        }
        EC2.Volume = Volume;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EC2;
    (function (EC2) {
        /**
         * Attaches an Amazon EBS volume to a running instance and exposes it to the instance
        with the
        specified device name.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volumeattachment.html
         */
        function VolumeAttachment(props) {
            return Object.assign({ Type: 'AWS::EC2::VolumeAttachment' }, props);
        }
        EC2.VolumeAttachment = VolumeAttachment;
    })(EC2 = AWS.EC2 || (AWS.EC2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ECR;
    (function (ECR) {
        /**
         * The AWS::ECR::Repository resource creates an Amazon Elastic Container Registry (Amazon ECR) repository,
        where users can push and pull Docker images. For more information, see Amazon ECR Repositories in the
        Amazon Elastic Container Registry User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html
         */
        function Repository(props) {
            return Object.assign({ Type: 'AWS::ECR::Repository' }, props);
        }
        ECR.Repository = Repository;
    })(ECR = AWS.ECR || (AWS.ECR = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ECS;
    (function (ECS) {
        /**
         * The AWS::ECS::Cluster resource creates an Amazon Elastic Container Service (Amazon ECS) cluster. This
        resource has no properties; use the Amazon ECS container agent to connect to the cluster.
        For more
        information, see Amazon ECS Container Agent in
        the Amazon Elastic Container Service Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html
         */
        function Cluster(props) {
            return Object.assign({ Type: 'AWS::ECS::Cluster' }, props);
        }
        ECS.Cluster = Cluster;
    })(ECS = AWS.ECS || (AWS.ECS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ECS;
    (function (ECS) {
        /**
         * The AWS::ECS::Service resource creates an Amazon Elastic Container Service (Amazon ECS) service that runs
        and maintains the requested number of tasks and associated load balancers.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html
         */
        function Service(props) {
            return Object.assign({ Type: 'AWS::ECS::Service' }, props);
        }
        ECS.Service = Service;
    })(ECS = AWS.ECS || (AWS.ECS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ECS;
    (function (ECS) {
        /**
         * The AWS::ECS::TaskDefinition resource describes the container and volume
        definitions of an Amazon Elastic Container Service (Amazon ECS) task. You can specify
        which Docker images to use, the
        required resources, and other configurations related to launching the task definition
        through an
        Amazon ECS service or task.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html
         */
        function TaskDefinition(props) {
            return Object.assign({ Type: 'AWS::ECS::TaskDefinition' }, props);
        }
        ECS.TaskDefinition = TaskDefinition;
    })(ECS = AWS.ECS || (AWS.ECS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EFS;
    (function (EFS) {
        /**
         * The AWS::EFS::FileSystem resource creates a new, empty file system in
        Amazon Elastic File System (Amazon EFS). You must create a mount target (AWS::EFS::MountTarget) to
        mount your Amazon EFS file system on an Amazon Elastic Compute Cloud (Amazon EC2)
        instance. For more information, see the
        CreateFileSystem API in the
        Amazon Elastic File System User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html
         */
        function FileSystem(props) {
            return Object.assign({ Type: 'AWS::EFS::FileSystem' }, props);
        }
        EFS.FileSystem = FileSystem;
    })(EFS = AWS.EFS || (AWS.EFS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EFS;
    (function (EFS) {
        /**
         * The AWS::EFS::MountTarget resource creates a mount target for an Amazon Elastic File System
        (Amazon EFS) file system (AWS::EFS::FileSystem). Use the mount target to mount file systems
        on Amazon Elastic Compute Cloud (Amazon EC2) instances.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html
         */
        function MountTarget(props) {
            return Object.assign({ Type: 'AWS::EFS::MountTarget' }, props);
        }
        EFS.MountTarget = MountTarget;
    })(EFS = AWS.EFS || (AWS.EFS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EKS;
    (function (EKS) {
        /**
         * The AWS::EKS::Cluster resource creates an Amazon EKS cluster control plane. The
        Amazon EKS cluster control plane consists of control plane instances that run the
        Kubernetes
        software, like etcd and the Kubernetes API server. The control plane runs in an
        account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS endpoint
        associated with
        your cluster. For more information, see Clusters in the
        Amazon EKS User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html
         */
        function Cluster(props) {
            return Object.assign({ Type: 'AWS::EKS::Cluster' }, props);
        }
        EKS.Cluster = Cluster;
    })(EKS = AWS.EKS || (AWS.EKS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EMR;
    (function (EMR) {
        /**
         * The AWS::EMR::Cluster resource creates an Amazon EMR cluster. This cluster is a
        collection of EC2 instances that you can run big data frameworks on to process and
        analyze vast
        amounts of data. For more information, see Plan an Amazon EMR
           Cluster in the Amazon EMR Management Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticmapreduce-cluster.html
         */
        function Cluster(props) {
            return Object.assign({ Type: 'AWS::EMR::Cluster' }, props);
        }
        EMR.Cluster = Cluster;
    })(EMR = AWS.EMR || (AWS.EMR = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EMR;
    (function (EMR) {
        /**
         * Use
        the AWS::EMR::InstanceFleetConfig resource
        to
        configure
        a Spot
        Instance
        fleet
        for an Amazon EMR cluster. For more information, see Configure Instance
           Fleets in the Amazon EMR Management Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticmapreduce-instancefleetconfig.html
         */
        function InstanceFleetConfig(props) {
            return Object.assign({ Type: 'AWS::EMR::InstanceFleetConfig' }, props);
        }
        EMR.InstanceFleetConfig = InstanceFleetConfig;
    })(EMR = AWS.EMR || (AWS.EMR = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EMR;
    (function (EMR) {
        /**
         * The AWS::EMR::InstanceGroupConfig resource configures a task instance group for
        an Amazon EMR cluster.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html
         */
        function InstanceGroupConfig(props) {
            return Object.assign({ Type: 'AWS::EMR::InstanceGroupConfig' }, props);
        }
        EMR.InstanceGroupConfig = InstanceGroupConfig;
    })(EMR = AWS.EMR || (AWS.EMR = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EMR;
    (function (EMR) {
        /**
         * The AWS::EMR::SecurityConfiguration resource creates a security
        configuration that is stored in the Amazon EMR web service. You can specify the security
        configuration when creating a cluster. For more information, see
           Specifying Amazon EMR Encryption Options Using a Security Configuration in the Amazon EMR Release Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-securityconfiguration.html
         */
        function SecurityConfiguration(props) {
            return Object.assign({ Type: 'AWS::EMR::SecurityConfiguration' }, props);
        }
        EMR.SecurityConfiguration = SecurityConfiguration;
    })(EMR = AWS.EMR || (AWS.EMR = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var EMR;
    (function (EMR) {
        /**
         * The AWS::EMR::Step resource creates a unit of work (a job flow step) that you
        submit to an Amazon EMR (Amazon EMR) cluster. The job flow step contains instructions
        for processing
        data on the cluster.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-step.html
         */
        function Step(props) {
            return Object.assign({ Type: 'AWS::EMR::Step' }, props);
        }
        EMR.Step = Step;
    })(EMR = AWS.EMR || (AWS.EMR = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElastiCache;
    (function (ElastiCache) {
        /**
         * The AWS::ElastiCache::CacheCluster type creates an Amazon ElastiCache cache cluster.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cache-cluster.html
         */
        function CacheCluster(props) {
            return Object.assign({ Type: 'AWS::ElastiCache::CacheCluster' }, props);
        }
        ElastiCache.CacheCluster = CacheCluster;
    })(ElastiCache = AWS.ElastiCache || (AWS.ElastiCache = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElastiCache;
    (function (ElastiCache) {
        /**
         * The AWS::ElastiCache::ParameterGroup type creates a new cache parameter group. Cache
        parameter groups control
        the parameters for a cache cluster.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-parameter-group.html
         */
        function ParameterGroup(props) {
            return Object.assign({ Type: 'AWS::ElastiCache::ParameterGroup' }, props);
        }
        ElastiCache.ParameterGroup = ParameterGroup;
    })(ElastiCache = AWS.ElastiCache || (AWS.ElastiCache = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElastiCache;
    (function (ElastiCache) {
        /**
         * The AWS::ElastiCache::ReplicationGroup resource creates an Amazon ElastiCache Redis
        replication group. A replication group is a
        collection of cache clusters, where one of the clusters is a primary read-write cluster
        and
        the others are read-only replicas.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html
         */
        function ReplicationGroup(props) {
            return Object.assign({ Type: 'AWS::ElastiCache::ReplicationGroup' }, props);
        }
        ElastiCache.ReplicationGroup = ReplicationGroup;
    })(ElastiCache = AWS.ElastiCache || (AWS.ElastiCache = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElastiCache;
    (function (ElastiCache) {
        /**
         * The AWS::ElastiCache::SecurityGroup resource creates a cache security group.
        For more information about cache security groups, go to Cache
           Security Groups in the Amazon ElastiCache User Guide or go to
        CreateCacheSecurityGroup in the Amazon ElastiCache API Reference
           Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group.html
         */
        function SecurityGroup(props) {
            return Object.assign({ Type: 'AWS::ElastiCache::SecurityGroup' }, props);
        }
        ElastiCache.SecurityGroup = SecurityGroup;
    })(ElastiCache = AWS.ElastiCache || (AWS.ElastiCache = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElastiCache;
    (function (ElastiCache) {
        /**
         * The AWS::ElastiCache::SecurityGroupIngress type authorizes ingress to a cache security
        group from hosts in specified Amazon EC2 security groups. For more information about
        ElastiCache
        security group ingress, go to AuthorizeCacheSecurityGroupIngress in the Amazon ElastiCache API
           Reference Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group-ingress.html
         */
        function SecurityGroupIngress(props) {
            return Object.assign({ Type: 'AWS::ElastiCache::SecurityGroupIngress' }, props);
        }
        ElastiCache.SecurityGroupIngress = SecurityGroupIngress;
    })(ElastiCache = AWS.ElastiCache || (AWS.ElastiCache = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElastiCache;
    (function (ElastiCache) {
        /**
         * Creates a cache subnet group. For more information about cache subnet groups, go to
        Cache Subnet Groups in the
        Amazon ElastiCache User Guide or go to CreateCacheSubnetGroup in the
        Amazon ElastiCache API Reference Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-subnetgroup.html
         */
        function SubnetGroup(props) {
            return Object.assign({ Type: 'AWS::ElastiCache::SubnetGroup' }, props);
        }
        ElastiCache.SubnetGroup = SubnetGroup;
    })(ElastiCache = AWS.ElastiCache || (AWS.ElastiCache = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElasticBeanstalk;
    (function (ElasticBeanstalk) {
        /**
         * Creates an Elastic Beanstalk application.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk.html
         */
        function Application(props) {
            return Object.assign({ Type: 'AWS::ElasticBeanstalk::Application' }, props);
        }
        ElasticBeanstalk.Application = Application;
    })(ElasticBeanstalk = AWS.ElasticBeanstalk || (AWS.ElasticBeanstalk = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElasticBeanstalk;
    (function (ElasticBeanstalk) {
        /**
         * Creates an application version, an iteration of deployable code, for an Elastic Beanstalk
        application.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-version.html
         */
        function ApplicationVersion(props) {
            return Object.assign({ Type: 'AWS::ElasticBeanstalk::ApplicationVersion' }, props);
        }
        ElasticBeanstalk.ApplicationVersion = ApplicationVersion;
    })(ElasticBeanstalk = AWS.ElasticBeanstalk || (AWS.ElasticBeanstalk = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElasticBeanstalk;
    (function (ElasticBeanstalk) {
        /**
         *
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html
         */
        function ConfigurationTemplate(props) {
            return Object.assign({ Type: 'AWS::ElasticBeanstalk::ConfigurationTemplate' }, props);
        }
        ElasticBeanstalk.ConfigurationTemplate = ConfigurationTemplate;
    })(ElasticBeanstalk = AWS.ElasticBeanstalk || (AWS.ElasticBeanstalk = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElasticBeanstalk;
    (function (ElasticBeanstalk) {
        /**
         * Creates or updates an AWS Elastic Beanstalk environment.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-environment.html
         */
        function Environment(props) {
            return Object.assign({ Type: 'AWS::ElasticBeanstalk::Environment' }, props);
        }
        ElasticBeanstalk.Environment = Environment;
    })(ElasticBeanstalk = AWS.ElasticBeanstalk || (AWS.ElasticBeanstalk = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElasticLoadBalancing;
    (function (ElasticLoadBalancing) {
        /**
         * The AWS::ElasticLoadBalancing::LoadBalancer type creates a LoadBalancer.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html
         */
        function LoadBalancer(props) {
            return Object.assign({ Type: 'AWS::ElasticLoadBalancing::LoadBalancer' }, props);
        }
        ElasticLoadBalancing.LoadBalancer = LoadBalancer;
    })(ElasticLoadBalancing = AWS.ElasticLoadBalancing || (AWS.ElasticLoadBalancing = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElasticLoadBalancingV2;
    (function (ElasticLoadBalancingV2) {
        /**
         * The AWS::ElasticLoadBalancingV2::Listener resource creates a listener for an
        Elastic Load Balancing Application or Network load balancer. The listener checks for
        connection requests and
        forwards them to one or more target groups. For more information, see Getting Started in the Elastic Load Balancing User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html
         */
        function Listener(props) {
            return Object.assign({ Type: 'AWS::ElasticLoadBalancingV2::Listener' }, props);
        }
        ElasticLoadBalancingV2.Listener = Listener;
    })(ElasticLoadBalancingV2 = AWS.ElasticLoadBalancingV2 || (AWS.ElasticLoadBalancingV2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElasticLoadBalancingV2;
    (function (ElasticLoadBalancingV2) {
        /**
         * The AWS::ElasticLoadBalancingV2::ListenerCertificate resource specifies
        certificates for an Elastic Load Balancing secure listener. For more information,
        see Getting Started in the Elastic Load Balancing User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html
         */
        function ListenerCertificate(props) {
            return Object.assign({ Type: 'AWS::ElasticLoadBalancingV2::ListenerCertificate' }, props);
        }
        ElasticLoadBalancingV2.ListenerCertificate = ListenerCertificate;
    })(ElasticLoadBalancingV2 = AWS.ElasticLoadBalancingV2 || (AWS.ElasticLoadBalancingV2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElasticLoadBalancingV2;
    (function (ElasticLoadBalancingV2) {
        /**
         * The AWS::ElasticLoadBalancingV2::ListenerRule resource defines which requests an Elastic Load Balancing listener takes action on
        and the action that it takes. For more information, see Getting Started in the Elastic Load Balancing User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html
         */
        function ListenerRule(props) {
            return Object.assign({ Type: 'AWS::ElasticLoadBalancingV2::ListenerRule' }, props);
        }
        ElasticLoadBalancingV2.ListenerRule = ListenerRule;
    })(ElasticLoadBalancingV2 = AWS.ElasticLoadBalancingV2 || (AWS.ElasticLoadBalancingV2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElasticLoadBalancingV2;
    (function (ElasticLoadBalancingV2) {
        /**
         * The AWS::ElasticLoadBalancingV2::LoadBalancer resource creates an Elastic Load Balancing
        Application or Network Load Balancer. For more information, see Getting Started in the Elastic Load Balancing User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html
         */
        function LoadBalancer(props) {
            return Object.assign({ Type: 'AWS::ElasticLoadBalancingV2::LoadBalancer' }, props);
        }
        ElasticLoadBalancingV2.LoadBalancer = LoadBalancer;
    })(ElasticLoadBalancingV2 = AWS.ElasticLoadBalancingV2 || (AWS.ElasticLoadBalancingV2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ElasticLoadBalancingV2;
    (function (ElasticLoadBalancingV2) {
        /**
         * The AWS::ElasticLoadBalancingV2::TargetGroup resource creates an Elastic Load Balancing
        target group that routes requests to one or more registered targets, such as EC2 instances.
        For
        more information, see Getting Started in the Elastic Load Balancing User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html
         */
        function TargetGroup(props) {
            return Object.assign({ Type: 'AWS::ElasticLoadBalancingV2::TargetGroup' }, props);
        }
        ElasticLoadBalancingV2.TargetGroup = TargetGroup;
    })(ElasticLoadBalancingV2 = AWS.ElasticLoadBalancingV2 || (AWS.ElasticLoadBalancingV2 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Elasticsearch;
    (function (Elasticsearch) {
        /**
         * The AWS::Elasticsearch::Domain resource creates an Amazon Elasticsearch Service (Amazon ES) domain
        that encapsulates the Amazon ES engine instances. For more information, see CreateElasticsearchDomain in the
        Amazon Elasticsearch Service Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticsearch-domain.html
         */
        function Domain(props) {
            return Object.assign({ Type: 'AWS::Elasticsearch::Domain' }, props);
        }
        Elasticsearch.Domain = Domain;
    })(Elasticsearch = AWS.Elasticsearch || (AWS.Elasticsearch = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Events;
    (function (Events) {
        /**
         * The AWS::Events::Rule resource creates a rule that matches incoming Amazon CloudWatch Events (CloudWatch
        Events) events and routes them to one or more targets for processing. For more information,
        see
        Using CloudWatch Events in the Amazon CloudWatch User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html
         */
        function Rule(props) {
            return Object.assign({ Type: 'AWS::Events::Rule' }, props);
        }
        Events.Rule = Rule;
    })(Events = AWS.Events || (AWS.Events = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var GameLift;
    (function (GameLift) {
        /**
         * The AWS::GameLift::Alias resource creates an alias for an Amazon GameLift (GameLift)
        fleet, which you can use to anonymize your fleet. You can reference the alias instead
        of a
        specific fleet when you create game sessions. For more information, see the CreateAlias action in the
        Amazon GameLift API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html
         */
        function Alias(props) {
            return Object.assign({ Type: 'AWS::GameLift::Alias' }, props);
        }
        GameLift.Alias = Alias;
    })(GameLift = AWS.GameLift || (AWS.GameLift = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var GameLift;
    (function (GameLift) {
        /**
         * The AWS::GameLift::Build resource creates a build that includes all of the
        components to run your game server in an Amazon GameLift (GameLift) fleet.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html
         */
        function Build(props) {
            return Object.assign({ Type: 'AWS::GameLift::Build' }, props);
        }
        GameLift.Build = Build;
    })(GameLift = AWS.GameLift || (AWS.GameLift = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var GameLift;
    (function (GameLift) {
        /**
         * The AWS::GameLift::Fleet resource creates an Amazon GameLift (GameLift) fleet to host
        game servers. A fleet is a set of EC2 instances, each of which is a host in the fleet.
        For more
        information, see the CreateFleet action in
        the Amazon GameLift API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html
         */
        function Fleet(props) {
            return Object.assign({ Type: 'AWS::GameLift::Fleet' }, props);
        }
        GameLift.Fleet = Fleet;
    })(GameLift = AWS.GameLift || (AWS.GameLift = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Glue;
    (function (Glue) {
        /**
         * The
        AWS::Glue::Classifier resource creates an AWS Glue classifier that categorizes data sources and specifies
        schemas.
        For more information, see Adding Classifiers to a Crawler and Classifier Structure in the
        AWS Glue Developer Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html
         */
        function Classifier(props) {
            return Object.assign({ Type: 'AWS::Glue::Classifier' }, props);
        }
        Glue.Classifier = Classifier;
    })(Glue = AWS.Glue || (AWS.Glue = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Glue;
    (function (Glue) {
        /**
         * The
        AWS::Glue::Connection resource specifies an AWS Glue connection to a data source. For more information,
        see Adding a Connection to Your Data Store and Connection Structure in the
        AWS Glue Developer Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html
         */
        function Connection(props) {
            return Object.assign({ Type: 'AWS::Glue::Connection' }, props);
        }
        Glue.Connection = Connection;
    })(Glue = AWS.Glue || (AWS.Glue = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Glue;
    (function (Glue) {
        /**
         * The
        AWS::Glue::Crawler resource specifies an AWS Glue crawler. For more information, see Cataloging Tables with a Crawler and Crawler Structure in the
        AWS Glue Developer Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html
         */
        function Crawler(props) {
            return Object.assign({ Type: 'AWS::Glue::Crawler' }, props);
        }
        Glue.Crawler = Crawler;
    })(Glue = AWS.Glue || (AWS.Glue = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Glue;
    (function (Glue) {
        /**
         * The
        AWS::Glue::Database resource specifies a logical grouping of tables in AWS Glue. For more information,
        see Defining a Database in Your Data Catalog and Database Structure in the
        AWS Glue Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html
         */
        function Database(props) {
            return Object.assign({ Type: 'AWS::Glue::Database' }, props);
        }
        Glue.Database = Database;
    })(Glue = AWS.Glue || (AWS.Glue = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Glue;
    (function (Glue) {
        /**
         * The
        AWS::Glue::DevEndpoint resource specifies a development endpoint where a developer can remotely debug ETL
        scripts for AWS Glue. For more information, see
        DevEndpoint Structure in the
        AWS Glue Developer Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html
         */
        function DevEndpoint(props) {
            return Object.assign({ Type: 'AWS::Glue::DevEndpoint' }, props);
        }
        Glue.DevEndpoint = DevEndpoint;
    })(Glue = AWS.Glue || (AWS.Glue = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Glue;
    (function (Glue) {
        /**
         * The
        AWS::Glue::Job resource specifies an AWS Glue job in the data catalog. For more information, see
        Adding Jobs in AWS Glue and Job Structure in the
        AWS Glue Developer Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html
         */
        function Job(props) {
            return Object.assign({ Type: 'AWS::Glue::Job' }, props);
        }
        Glue.Job = Job;
    })(Glue = AWS.Glue || (AWS.Glue = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Glue;
    (function (Glue) {
        /**
         * The AWS::Glue::Partition resource creates an AWS Glue partition, which
        represents a slice of table data. For more information, see CreatePartition Action and Partition Structure in the AWS Glue Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-partition.html
         */
        function Partition(props) {
            return Object.assign({ Type: 'AWS::Glue::Partition' }, props);
        }
        Glue.Partition = Partition;
    })(Glue = AWS.Glue || (AWS.Glue = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Glue;
    (function (Glue) {
        /**
         * The
        AWS::Glue::Table resource specifies tabular data in the AWS Glue data catalog. For more information,
        see Defining Tables in the AWS Glue Data Catalog and Table Structure in the
        AWS Glue Developer Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html
         */
        function Table(props) {
            return Object.assign({ Type: 'AWS::Glue::Table' }, props);
        }
        Glue.Table = Table;
    })(Glue = AWS.Glue || (AWS.Glue = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Glue;
    (function (Glue) {
        /**
         * The
        AWS::Glue::Trigger resource specifies triggers that run AWS Glue jobs. For more information, see Triggering Jobs in AWS Glue and Trigger Structure in the
        AWS Glue Developer Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html
         */
        function Trigger(props) {
            return Object.assign({ Type: 'AWS::Glue::Trigger' }, props);
        }
        Glue.Trigger = Trigger;
    })(Glue = AWS.Glue || (AWS.Glue = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var GuardDuty;
    (function (GuardDuty) {
        /**
         * The AWS::GuardDuty::Detector resource creates a single Amazon GuardDuty detector.
        A detector is an object that represents the GuardDuty service. You must create a detector
        for
        GuardDuty to become operational.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html
         */
        function Detector(props) {
            return Object.assign({ Type: 'AWS::GuardDuty::Detector' }, props);
        }
        GuardDuty.Detector = Detector;
    })(GuardDuty = AWS.GuardDuty || (AWS.GuardDuty = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var GuardDuty;
    (function (GuardDuty) {
        /**
         * You can use the AWS::GuardDuty::Filter resource to create a GuardDuty filter
        using the specified finding criteria.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html
         */
        function Filter(props) {
            return Object.assign({ Type: 'AWS::GuardDuty::Filter' }, props);
        }
        GuardDuty.Filter = Filter;
    })(GuardDuty = AWS.GuardDuty || (AWS.GuardDuty = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var GuardDuty;
    (function (GuardDuty) {
        /**
         * The AWS::GuardDuty::IPSet resource creates an Amazon GuardDuty IP set. An IP
        set is a list of trusted IP addresses that have been whitelisted for secure communication
        with
        your AWS environment.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html
         */
        function IPSet(props) {
            return Object.assign({ Type: 'AWS::GuardDuty::IPSet' }, props);
        }
        GuardDuty.IPSet = IPSet;
    })(GuardDuty = AWS.GuardDuty || (AWS.GuardDuty = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var GuardDuty;
    (function (GuardDuty) {
        /**
         * You can use the AWS::GuardDuty::Master resource in a GuardDuty member account
        to accept an invitation to be managed by a GuardDuty master account. The GuardDuty
        master
        account must have already invited the current account (by calling the InviteMembers
        API
        operation or by creating an AWS::GuardDuty::Member resource) before the current
        account can use the AWS::GuardDuty::Master resource to accept the master account's
        invitation.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html
         */
        function Master(props) {
            return Object.assign({ Type: 'AWS::GuardDuty::Master' }, props);
        }
        GuardDuty.Master = Master;
    })(GuardDuty = AWS.GuardDuty || (AWS.GuardDuty = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var GuardDuty;
    (function (GuardDuty) {
        /**
         * You can use the AWS::GuardDuty::Member resource to add an AWS account as a
        GuardDuty member account to the current GuardDuty master account. If the value of
        the Status
        property is not provided or set to CREATED, a member account is only created. If the
        value of
        the Status property is set to INVITED, a member account is created and invited.
        AWS::GuardDuty::Member resource has to be created with the Status property set to
        INVITED before the AWS::GuardDuty::Master resource can be created in a GuardDuty
        member account.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html
         */
        function Member(props) {
            return Object.assign({ Type: 'AWS::GuardDuty::Member' }, props);
        }
        GuardDuty.Member = Member;
    })(GuardDuty = AWS.GuardDuty || (AWS.GuardDuty = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var GuardDuty;
    (function (GuardDuty) {
        /**
         * The AWS::GuardDuty::ThreatIntelSet resource creates a ThreatIntelSet. A
        ThreatIntelSet consists of known malicious IP addresses. GuardDuty generates findings
        based on
        ThreatIntelSets.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html
         */
        function ThreatIntelSet(props) {
            return Object.assign({ Type: 'AWS::GuardDuty::ThreatIntelSet' }, props);
        }
        GuardDuty.ThreatIntelSet = ThreatIntelSet;
    })(GuardDuty = AWS.GuardDuty || (AWS.GuardDuty = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IAM;
    (function (IAM) {
        /**
         * The AWS::IAM::AccessKey resource type generates a secret access key and assigns it
        to an IAM user or AWS
        account.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html
         */
        function AccessKey(props) {
            return Object.assign({ Type: 'AWS::IAM::AccessKey' }, props);
        }
        IAM.AccessKey = AccessKey;
    })(IAM = AWS.IAM || (AWS.IAM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IAM;
    (function (IAM) {
        /**
         * The AWS::IAM::Group resource creates an AWS Identity and Access Management (IAM) group.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html
         */
        function Group(props) {
            return Object.assign({ Type: 'AWS::IAM::Group' }, props);
        }
        IAM.Group = Group;
    })(IAM = AWS.IAM || (AWS.IAM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IAM;
    (function (IAM) {
        /**
         * The AWS::IAM::InstanceProfile resource creates an AWS Identity and Access Management (IAM) instance
        profile that can be used with IAM roles for EC2 instances.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html
         */
        function InstanceProfile(props) {
            return Object.assign({ Type: 'AWS::IAM::InstanceProfile' }, props);
        }
        IAM.InstanceProfile = InstanceProfile;
    })(IAM = AWS.IAM || (AWS.IAM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IAM;
    (function (IAM) {
        /**
         * AWS::IAM::ManagedPolicy creates an AWS Identity and Access Management (IAM) managed policy for your
        AWS account, which you can use to apply permissions to IAM users, groups, and roles.
        For more
        information about managed policies, see Managed Policies and Inline
           Policies in the IAM User Guide guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html
         */
        function ManagedPolicy(props) {
            return Object.assign({ Type: 'AWS::IAM::ManagedPolicy' }, props);
        }
        IAM.ManagedPolicy = ManagedPolicy;
    })(IAM = AWS.IAM || (AWS.IAM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IAM;
    (function (IAM) {
        /**
         * The AWS::IAM::Policy resource associates an IAM policy with IAM users,
        roles, or groups. For more information about IAM policies, see Overview of IAM Policies in the
        IAM User Guide guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html
         */
        function Policy(props) {
            return Object.assign({ Type: 'AWS::IAM::Policy' }, props);
        }
        IAM.Policy = Policy;
    })(IAM = AWS.IAM || (AWS.IAM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IAM;
    (function (IAM) {
        /**
         * Creates an AWS Identity and Access Management (IAM) role. Use an IAM role to enable
        applications running on an EC2 instance to securely access your AWS resources.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html
         */
        function Role(props) {
            return Object.assign({ Type: 'AWS::IAM::Role' }, props);
        }
        IAM.Role = Role;
    })(IAM = AWS.IAM || (AWS.IAM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IAM;
    (function (IAM) {
        /**
         * The AWS::IAM::ServiceLinkedRole resource creates a service-linked role in
        AWS Identity and Access Management (IAM). A service-linked role is a unique type of
        IAM role that is linked directly
        to an AWS service. Service-linked roles are predefined by the service and include
        all the
        permissions that the service requires to call other AWS services on your behalf. The
        linked
        service also defines how you create, modify, and delete a service-linked role. For
        more
        information, see CreateServiceLinkedRole in the IAM API Reference or Using Service-Linked Roles in the
        IAM User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html
         */
        function ServiceLinkedRole(props) {
            return Object.assign({ Type: 'AWS::IAM::ServiceLinkedRole' }, props);
        }
        IAM.ServiceLinkedRole = ServiceLinkedRole;
    })(IAM = AWS.IAM || (AWS.IAM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IAM;
    (function (IAM) {
        /**
         * The AWS::IAM::User type creates a user.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html
         */
        function User(props) {
            return Object.assign({ Type: 'AWS::IAM::User' }, props);
        }
        IAM.User = User;
    })(IAM = AWS.IAM || (AWS.IAM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IAM;
    (function (IAM) {
        /**
         * The AWS::IAM::UserToGroupAddition type adds AWS Identity and Access Management (IAM) users to a
        group.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html
         */
        function UserToGroupAddition(props) {
            return Object.assign({ Type: 'AWS::IAM::UserToGroupAddition' }, props);
        }
        IAM.UserToGroupAddition = UserToGroupAddition;
    })(IAM = AWS.IAM || (AWS.IAM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Inspector;
    (function (Inspector) {
        /**
         * The AWS::Inspector::AssessmentTarget resource creates an Amazon Inspector
        assessment target - a resource that contains information about an Amazon Inspector
        application.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html
         */
        function AssessmentTarget(props) {
            return Object.assign({ Type: 'AWS::Inspector::AssessmentTarget' }, props);
        }
        Inspector.AssessmentTarget = AssessmentTarget;
    })(Inspector = AWS.Inspector || (AWS.Inspector = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Inspector;
    (function (Inspector) {
        /**
         * The AWS::Inspector::AssessmentTemplate resource creates an Amazon Inspector
        assessment template - a resource that contains information about an Amazon Inspector
        assessment
        template.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html
         */
        function AssessmentTemplate(props) {
            return Object.assign({ Type: 'AWS::Inspector::AssessmentTemplate' }, props);
        }
        Inspector.AssessmentTemplate = AssessmentTemplate;
    })(Inspector = AWS.Inspector || (AWS.Inspector = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Inspector;
    (function (Inspector) {
        /**
         * The AWS::Inspector::ResourceGroup resource is used to create Amazon Inspector
        resource groups. A resource group defines a set of tags that, when queried, identify
        the AWS
        resources that make up the assessment target.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html
         */
        function ResourceGroup(props) {
            return Object.assign({ Type: 'AWS::Inspector::ResourceGroup' }, props);
        }
        Inspector.ResourceGroup = ResourceGroup;
    })(Inspector = AWS.Inspector || (AWS.Inspector = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IoT;
    (function (IoT) {
        /**
         * Use the AWS::IoT::Certificate resource to declare an X.509 certificate.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html
         */
        function Certificate(props) {
            return Object.assign({ Type: 'AWS::IoT::Certificate' }, props);
        }
        IoT.Certificate = Certificate;
    })(IoT = AWS.IoT || (AWS.IoT = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IoT;
    (function (IoT) {
        /**
         * Use the AWS::IoT::Policy resource to declare an AWS IoT policy.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html
         */
        function Policy(props) {
            return Object.assign({ Type: 'AWS::IoT::Policy' }, props);
        }
        IoT.Policy = Policy;
    })(IoT = AWS.IoT || (AWS.IoT = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IoT;
    (function (IoT) {
        /**
         * Use the AWS::IoT::PolicyPrincipalAttachment resource to attach an AWS IoT policy
        to a principal (an X.509 certificate or other credential).
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html
         */
        function PolicyPrincipalAttachment(props) {
            return Object.assign({ Type: 'AWS::IoT::PolicyPrincipalAttachment' }, props);
        }
        IoT.PolicyPrincipalAttachment = PolicyPrincipalAttachment;
    })(IoT = AWS.IoT || (AWS.IoT = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IoT;
    (function (IoT) {
        /**
         * Use the AWS::IoT::Thing resource to declare an AWS IoT thing.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html
         */
        function Thing(props) {
            return Object.assign({ Type: 'AWS::IoT::Thing' }, props);
        }
        IoT.Thing = Thing;
    })(IoT = AWS.IoT || (AWS.IoT = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IoT;
    (function (IoT) {
        /**
         * Use the AWS::IoT::ThingPrincipalAttachment resource to attach a principal (an
        X.509 certificate or another credential) to a thing.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html
         */
        function ThingPrincipalAttachment(props) {
            return Object.assign({ Type: 'AWS::IoT::ThingPrincipalAttachment' }, props);
        }
        IoT.ThingPrincipalAttachment = ThingPrincipalAttachment;
    })(IoT = AWS.IoT || (AWS.IoT = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var IoT;
    (function (IoT) {
        /**
         * Use the AWS::IoT::TopicRule resource to declare an AWS IoT rule.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html
         */
        function TopicRule(props) {
            return Object.assign({ Type: 'AWS::IoT::TopicRule' }, props);
        }
        IoT.TopicRule = TopicRule;
    })(IoT = AWS.IoT || (AWS.IoT = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var KMS;
    (function (KMS) {
        /**
         * The AWS::KMS::Alias resource creates a display name for a customer master key (CMK) in AWS Key Management
        Service (AWS KMS). Using an alias to refer to a key can help you simplify key management.
        For example, when rotating keys, you can just update the alias mapping instead of
        tracking and changing key IDs. For more information, see Working with Aliases in the AWS Key Management Service Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html
         */
        function Alias(props) {
            return Object.assign({ Type: 'AWS::KMS::Alias' }, props);
        }
        KMS.Alias = Alias;
    })(KMS = AWS.KMS || (AWS.KMS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var KMS;
    (function (KMS) {
        /**
         * The AWS::KMS::Key resource creates a customer master key (CMK) in AWS Key Management Service
        (AWS KMS). Users (customers) can use the master key to encrypt their data stored in
        AWS services
        that are integrated with AWS KMS or within their applications. For more information,
        see What is the AWS Key Management Service? in the
        AWS Key Management Service Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html
         */
        function Key(props) {
            return Object.assign({ Type: 'AWS::KMS::Key' }, props);
        }
        KMS.Key = Key;
    })(KMS = AWS.KMS || (AWS.KMS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Kinesis;
    (function (Kinesis) {
        /**
         * Creates an Kinesis stream that captures and transports data records that are emitted
        from data
        sources. For information about creating streams, see CreateStream in the
        Amazon Kinesis API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html
         */
        function Stream(props) {
            return Object.assign({ Type: 'AWS::Kinesis::Stream' }, props);
        }
        Kinesis.Stream = Stream;
    })(Kinesis = AWS.Kinesis || (AWS.Kinesis = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var KinesisAnalytics;
    (function (KinesisAnalytics) {
        /**
         * The AWS::KinesisAnalytics::Application resource creates an Amazon Kinesis Data Analytics
        application. For more information, see the Amazon Kinesis Data Analytics Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html
         */
        function Application(props) {
            return Object.assign({ Type: 'AWS::KinesisAnalytics::Application' }, props);
        }
        KinesisAnalytics.Application = Application;
    })(KinesisAnalytics = AWS.KinesisAnalytics || (AWS.KinesisAnalytics = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var KinesisAnalytics;
    (function (KinesisAnalytics) {
        /**
         * The
        AWS::KinesisAnalytics::ApplicationOutput resource adds an external destination to your Amazon Kinesis Data Analytics application.
        For more information, see
        AddApplicationOutput in the
        Amazon Kinesis Data Analytics Developer Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationoutput.html
         */
        function ApplicationOutput(props) {
            return Object.assign({ Type: 'AWS::KinesisAnalytics::ApplicationOutput' }, props);
        }
        KinesisAnalytics.ApplicationOutput = ApplicationOutput;
    })(KinesisAnalytics = AWS.KinesisAnalytics || (AWS.KinesisAnalytics = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var KinesisAnalytics;
    (function (KinesisAnalytics) {
        /**
         * Use the AWS CloudFormation
        AWS::KinesisAnalytics::ApplicationReferenceDataSource resource  to add a reference data source to an existing  Amazon Kinesis Data Analytics
        application.
        For more information, see AddApplicationReferenceDataSource in the
        Amazon Kinesis Data Analytics Developer Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationreferencedatasource.html
         */
        function ApplicationReferenceDataSource(props) {
            return Object.assign({ Type: 'AWS::KinesisAnalytics::ApplicationReferenceDataSource' }, props);
        }
        KinesisAnalytics.ApplicationReferenceDataSource = ApplicationReferenceDataSource;
    })(KinesisAnalytics = AWS.KinesisAnalytics || (AWS.KinesisAnalytics = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var KinesisFirehose;
    (function (KinesisFirehose) {
        /**
         * The AWS::KinesisFirehose::DeliveryStream resource creates an Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivery
        stream that delivers real-time streaming data to an Amazon Simple Storage Service
        (Amazon S3), Amazon Redshift, or Amazon Elasticsearch Service (Amazon ES) destination.
        For more information, see Creating an Amazon Kinesis Data Firehose Delivery Stream in the Amazon Kinesis Data Firehose Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html
         */
        function DeliveryStream(props) {
            return Object.assign({ Type: 'AWS::KinesisFirehose::DeliveryStream' }, props);
        }
        KinesisFirehose.DeliveryStream = DeliveryStream;
    })(KinesisFirehose = AWS.KinesisFirehose || (AWS.KinesisFirehose = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Lambda;
    (function (Lambda) {
        /**
         * The AWS::Lambda::Alias resource creates an alias that points to the version of an AWS Lambda (Lambda) function
        that you specify. Use aliases when you want to control which version of your function
        other services or applications invoke. Those services or applications can use your
        function's alias so that they don't need to be updated whenever you release a new
        version of your function. For more information, see Introduction to
           AWS Lambda Aliases in the AWS Lambda Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html
         */
        function Alias(props) {
            return Object.assign({ Type: 'AWS::Lambda::Alias' }, props);
        }
        Lambda.Alias = Alias;
    })(Lambda = AWS.Lambda || (AWS.Lambda = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Lambda;
    (function (Lambda) {
        /**
         * The AWS::Lambda::EventSourceMapping resource specifies a stream as an event
        source for an AWS Lambda (Lambda) function. Lambda invokes the associated function
        when records
        are posted to the stream. For more information, see CreateEventSourceMapping in
        the AWS Lambda Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html
         */
        function EventSourceMapping(props) {
            return Object.assign({ Type: 'AWS::Lambda::EventSourceMapping' }, props);
        }
        Lambda.EventSourceMapping = EventSourceMapping;
    })(Lambda = AWS.Lambda || (AWS.Lambda = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Lambda;
    (function (Lambda) {
        /**
         * The AWS::Lambda::Function resource creates an AWS Lambda (Lambda) function that
        can run code in response to events. For more information, see CreateFunction in the
        AWS Lambda Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html
         */
        function Function(props) {
            return Object.assign({ Type: 'AWS::Lambda::Function' }, props);
        }
        Lambda.Function = Function;
    })(Lambda = AWS.Lambda || (AWS.Lambda = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Lambda;
    (function (Lambda) {
        /**
         * The AWS::Lambda::Permission resource associates a policy statement with a
        specific AWS Lambda (Lambda) function's access policy. The function policy grants
        a specific AWS
        service or application permission to invoke the function. For more information, see
        AddPermission in the
        AWS Lambda Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html
         */
        function Permission(props) {
            return Object.assign({ Type: 'AWS::Lambda::Permission' }, props);
        }
        Lambda.Permission = Permission;
    })(Lambda = AWS.Lambda || (AWS.Lambda = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Lambda;
    (function (Lambda) {
        /**
         * The AWS::Lambda::Version resource publishes a specified version of an AWS Lambda (Lambda) function. When publishing
        a new version of your function, Lambda copies the latest version of your function.
        For more information, see Introduction to AWS Lambda Versioning in the AWS Lambda Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html
         */
        function Version(props) {
            return Object.assign({ Type: 'AWS::Lambda::Version' }, props);
        }
        Lambda.Version = Version;
    })(Lambda = AWS.Lambda || (AWS.Lambda = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Logs;
    (function (Logs) {
        /**
         * The AWS::Logs::Destination resource creates an Amazon CloudWatch Logs (CloudWatch Logs) destination,
        which enables you to specify a physical resource (such as an Kinesis stream) that
        subscribes to
        CloudWatch Logs log events from another AWS account. For more information, see Cross-Account Log Data Sharing with
           Subscriptions in the Amazon CloudWatch User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html
         */
        function Destination(props) {
            return Object.assign({ Type: 'AWS::Logs::Destination' }, props);
        }
        Logs.Destination = Destination;
    })(Logs = AWS.Logs || (AWS.Logs = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Logs;
    (function (Logs) {
        /**
         * The AWS::Logs::LogGroup resource creates an Amazon CloudWatch Logs log group that defines
        common properties for log streams, such as their retention and access control rules.
        Each log
        stream must belong to one log group.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html
         */
        function LogGroup(props) {
            return Object.assign({ Type: 'AWS::Logs::LogGroup' }, props);
        }
        Logs.LogGroup = LogGroup;
    })(Logs = AWS.Logs || (AWS.Logs = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Logs;
    (function (Logs) {
        /**
         * The AWS::Logs::LogStream resource creates an Amazon CloudWatch Logs log stream in a log
        group. A log stream represents the sequence of events coming from an application instance
        or
        resource that you are monitoring. For more information, see Monitoring Log Files in the
        Amazon CloudWatch User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html
         */
        function LogStream(props) {
            return Object.assign({ Type: 'AWS::Logs::LogStream' }, props);
        }
        Logs.LogStream = LogStream;
    })(Logs = AWS.Logs || (AWS.Logs = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Logs;
    (function (Logs) {
        /**
         * The AWS::Logs::MetricFilter resource creates a metric filter that describes
        how Amazon CloudWatch Logs extracts information from logs that you specify and transforms
        it into Amazon CloudWatch
        metrics. If you have multiple metric filters that are associated with a log group,
        all the
        filters are applied to the log streams in that group.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html
         */
        function MetricFilter(props) {
            return Object.assign({ Type: 'AWS::Logs::MetricFilter' }, props);
        }
        Logs.MetricFilter = MetricFilter;
    })(Logs = AWS.Logs || (AWS.Logs = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Logs;
    (function (Logs) {
        /**
         * The AWS::Logs::SubscriptionFilter resource creates an Amazon CloudWatch Logs (CloudWatch Logs)
        subscription filter that defines which log events are delivered to your Kinesis stream
        or
        AWS Lambda (Lambda) function and where to send them.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html
         */
        function SubscriptionFilter(props) {
            return Object.assign({ Type: 'AWS::Logs::SubscriptionFilter' }, props);
        }
        Logs.SubscriptionFilter = SubscriptionFilter;
    })(Logs = AWS.Logs || (AWS.Logs = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Neptune;
    (function (Neptune) {
        /**
         * The AWS::Neptune::DBCluster resource creates an Amazon Neptune DB cluster.
        Neptune is a fully managed graph database.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html
         */
        function DBCluster(props) {
            return Object.assign({ Type: 'AWS::Neptune::DBCluster' }, props);
        }
        Neptune.DBCluster = DBCluster;
    })(Neptune = AWS.Neptune || (AWS.Neptune = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Neptune;
    (function (Neptune) {
        /**
         * The AWS::Neptune::DBClusterParameterGroup resource creates a new
        Amazon Neptune DB cluster parameter
        group.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html
         */
        function DBClusterParameterGroup(props) {
            return Object.assign({ Type: 'AWS::Neptune::DBClusterParameterGroup' }, props);
        }
        Neptune.DBClusterParameterGroup = DBClusterParameterGroup;
    })(Neptune = AWS.Neptune || (AWS.Neptune = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Neptune;
    (function (Neptune) {
        /**
         * The AWS::Neptune::DBInstance type creates an Amazon Neptune DB instance.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html
         */
        function DBInstance(props) {
            return Object.assign({ Type: 'AWS::Neptune::DBInstance' }, props);
        }
        Neptune.DBInstance = DBInstance;
    })(Neptune = AWS.Neptune || (AWS.Neptune = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Neptune;
    (function (Neptune) {
        /**
         * Creates a custom parameter group for DB instances.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html
         */
        function DBParameterGroup(props) {
            return Object.assign({ Type: 'AWS::Neptune::DBParameterGroup' }, props);
        }
        Neptune.DBParameterGroup = DBParameterGroup;
    })(Neptune = AWS.Neptune || (AWS.Neptune = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Neptune;
    (function (Neptune) {
        /**
         * The AWS::Neptune::DBSubnetGroup type creates an Amazon Neptune DB subnet
        group. Subnet groups must contain at least two subnets in two different Availability
        Zones in
        the same AWS Region.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html
         */
        function DBSubnetGroup(props) {
            return Object.assign({ Type: 'AWS::Neptune::DBSubnetGroup' }, props);
        }
        Neptune.DBSubnetGroup = DBSubnetGroup;
    })(Neptune = AWS.Neptune || (AWS.Neptune = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var OpsWorks;
    (function (OpsWorks) {
        /**
         * Defines an AWS OpsWorks app for an AWS OpsWorks stack. The app specifies the code
        that you want to run on
        an application server.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html
         */
        function App(props) {
            return Object.assign({ Type: 'AWS::OpsWorks::App' }, props);
        }
        OpsWorks.App = App;
    })(OpsWorks = AWS.OpsWorks || (AWS.OpsWorks = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var OpsWorks;
    (function (OpsWorks) {
        /**
         * Attaches an Elastic Load Balancing load balancer to an AWS OpsWorks layer that you
        specify.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elbattachment.html
         */
        function ElasticLoadBalancerAttachment(props) {
            return Object.assign({ Type: 'AWS::OpsWorks::ElasticLoadBalancerAttachment' }, props);
        }
        OpsWorks.ElasticLoadBalancerAttachment = ElasticLoadBalancerAttachment;
    })(OpsWorks = AWS.OpsWorks || (AWS.OpsWorks = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var OpsWorks;
    (function (OpsWorks) {
        /**
         * Creates an Amazon Elastic Compute Cloud (Amazon EC2) instance for an AWS OpsWorks
        stack. Instances for  AWS OpsWorks stacks
        handle the work of serving applications and balancing traffic, for example.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html
         */
        function Instance(props) {
            return Object.assign({ Type: 'AWS::OpsWorks::Instance' }, props);
        }
        OpsWorks.Instance = Instance;
    })(OpsWorks = AWS.OpsWorks || (AWS.OpsWorks = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var OpsWorks;
    (function (OpsWorks) {
        /**
         * Creates an AWS OpsWorks layer. A layer defines, for example, which packages and applications
        are
        installed and how they are configured.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html
         */
        function Layer(props) {
            return Object.assign({ Type: 'AWS::OpsWorks::Layer' }, props);
        }
        OpsWorks.Layer = Layer;
    })(OpsWorks = AWS.OpsWorks || (AWS.OpsWorks = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var OpsWorks;
    (function (OpsWorks) {
        /**
         * Creates an AWS OpsWorks stack. An AWS OpsWorks stack represents a set of instances
        that you want to
        manage collectively, typically because they have a common purpose such as serving
        PHP
        applications.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html
         */
        function Stack(props) {
            return Object.assign({ Type: 'AWS::OpsWorks::Stack' }, props);
        }
        OpsWorks.Stack = Stack;
    })(OpsWorks = AWS.OpsWorks || (AWS.OpsWorks = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var OpsWorks;
    (function (OpsWorks) {
        /**
         * The AWS::OpsWorks::UserProfile resource configures SSH access for users who
        require access to instances in an AWS OpsWorks stack.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html
         */
        function UserProfile(props) {
            return Object.assign({ Type: 'AWS::OpsWorks::UserProfile' }, props);
        }
        OpsWorks.UserProfile = UserProfile;
    })(OpsWorks = AWS.OpsWorks || (AWS.OpsWorks = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var OpsWorks;
    (function (OpsWorks) {
        /**
         * The AWS::OpsWorks::Volume resource registers an Amazon Elastic Block Store (Amazon EBS) volume with
        an AWS OpsWorks stack.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html
         */
        function Volume(props) {
            return Object.assign({ Type: 'AWS::OpsWorks::Volume' }, props);
        }
        OpsWorks.Volume = Volume;
    })(OpsWorks = AWS.OpsWorks || (AWS.OpsWorks = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var RDS;
    (function (RDS) {
        /**
         * The AWS::RDS::DBCluster resource creates a cluster, such as an Aurora for
        Amazon RDS (Amazon Aurora) DB cluster. Amazon Aurora is a fully managed, MySQL-compatible,
        relational database engine. For more information, see Aurora on Amazon RDS in the
        Amazon RDS User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html
         */
        function DBCluster(props) {
            return Object.assign({ Type: 'AWS::RDS::DBCluster' }, props);
        }
        RDS.DBCluster = DBCluster;
    })(RDS = AWS.RDS || (AWS.RDS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var RDS;
    (function (RDS) {
        /**
         * The AWS::RDS::DBClusterParameterGroup resource creates a new Amazon Relational Database Service (Amazon RDS)
        database (DB) cluster parameter group. For more information about DB cluster parameter
        groups,
        see Appendix: DB Cluster and
           DB Instance Parameters in the Amazon RDS User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html
         */
        function DBClusterParameterGroup(props) {
            return Object.assign({ Type: 'AWS::RDS::DBClusterParameterGroup' }, props);
        }
        RDS.DBClusterParameterGroup = DBClusterParameterGroup;
    })(RDS = AWS.RDS || (AWS.RDS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var RDS;
    (function (RDS) {
        /**
         * The AWS::RDS::DBInstance type creates an Amazon Relational Database Service (Amazon RDS) DB instance. For
        detailed information about configuring RDS DB instances, see CreateDBInstance.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html
         */
        function DBInstance(props) {
            return Object.assign({ Type: 'AWS::RDS::DBInstance' }, props);
        }
        RDS.DBInstance = DBInstance;
    })(RDS = AWS.RDS || (AWS.RDS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var RDS;
    (function (RDS) {
        /**
         * Creates a custom parameter group for an RDS database family. For more information
        about RDS parameter groups,
        see Working with
           DB Parameter Groups in the Amazon Relational Database Service User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html
         */
        function DBParameterGroup(props) {
            return Object.assign({ Type: 'AWS::RDS::DBParameterGroup' }, props);
        }
        RDS.DBParameterGroup = DBParameterGroup;
    })(RDS = AWS.RDS || (AWS.RDS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var RDS;
    (function (RDS) {
        /**
         * The AWS::RDS::DBSecurityGroup type is used to create or update an Amazon RDS DB Security
        Group.
        For more information about DB security groups, see Working with DB Security Groups in the Amazon Relational Database Service Developer Guide. For
        details on the settings for DB security groups, see CreateDBSecurityGroup.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group.html
         */
        function DBSecurityGroup(props) {
            return Object.assign({ Type: 'AWS::RDS::DBSecurityGroup' }, props);
        }
        RDS.DBSecurityGroup = DBSecurityGroup;
    })(RDS = AWS.RDS || (AWS.RDS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var RDS;
    (function (RDS) {
        /**
         * The AWS::RDS::DBSecurityGroupIngress type enables ingress to a DBSecurityGroup using
        one of two forms of
        authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup
        if the application using the
        database is running on EC2 or VPC instances. Second, IP ranges are available if the
        application accessing your
        database is running on the Internet. For more information about DB security groups,
        see Working
           with DB security groups
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-security-group-ingress.html
         */
        function DBSecurityGroupIngress(props) {
            return Object.assign({ Type: 'AWS::RDS::DBSecurityGroupIngress' }, props);
        }
        RDS.DBSecurityGroupIngress = DBSecurityGroupIngress;
    })(RDS = AWS.RDS || (AWS.RDS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var RDS;
    (function (RDS) {
        /**
         * The AWS::RDS::DBSubnetGroup type creates an RDS database subnet group.
        Subnet groups must contain at least two subnets in two different
        Availability Zones in the same region.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnet-group.html
         */
        function DBSubnetGroup(props) {
            return Object.assign({ Type: 'AWS::RDS::DBSubnetGroup' }, props);
        }
        RDS.DBSubnetGroup = DBSubnetGroup;
    })(RDS = AWS.RDS || (AWS.RDS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var RDS;
    (function (RDS) {
        /**
         * Use the AWS::RDS::EventSubscription resource to get notifications for
        Amazon Relational Database Service events through the Amazon Simple Notification Service.
        For more information, see  Using Amazon RDS Event Notification in the
        Amazon RDS User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html
         */
        function EventSubscription(props) {
            return Object.assign({ Type: 'AWS::RDS::EventSubscription' }, props);
        }
        RDS.EventSubscription = EventSubscription;
    })(RDS = AWS.RDS || (AWS.RDS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var RDS;
    (function (RDS) {
        /**
         * Use the AWS::RDS::OptionGroup resource to create an option group that can make
        managing data and databases easier. For more information about option groups, see
        Working with Option Groups in the
        Amazon Relational Database Service User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html
         */
        function OptionGroup(props) {
            return Object.assign({ Type: 'AWS::RDS::OptionGroup' }, props);
        }
        RDS.OptionGroup = OptionGroup;
    })(RDS = AWS.RDS || (AWS.RDS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Redshift;
    (function (Redshift) {
        /**
         * Use the AWS::Redshift::Cluster resource to create an Amazon Redshift cluster. A
        cluster is a fully managed data warehouse that consists of a set of
        compute nodes. For more information about default and valid values, see CreateCluster in the
        Amazon Redshift API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html
         */
        function Cluster(props) {
            return Object.assign({ Type: 'AWS::Redshift::Cluster' }, props);
        }
        Redshift.Cluster = Cluster;
    })(Redshift = AWS.Redshift || (AWS.Redshift = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Redshift;
    (function (Redshift) {
        /**
         * Creates an Amazon Redshift parameter group that you can associate with an Amazon Redshift
        cluster. The parameters
        in the group apply to all the databases that you create in the cluster.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html
         */
        function ClusterParameterGroup(props) {
            return Object.assign({ Type: 'AWS::Redshift::ClusterParameterGroup' }, props);
        }
        Redshift.ClusterParameterGroup = ClusterParameterGroup;
    })(Redshift = AWS.Redshift || (AWS.Redshift = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Redshift;
    (function (Redshift) {
        /**
         * Creates an Amazon Redshift security group. You use security groups to control access
        to Amazon Redshift clusters
        that are not in a VPC.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html
         */
        function ClusterSecurityGroup(props) {
            return Object.assign({ Type: 'AWS::Redshift::ClusterSecurityGroup' }, props);
        }
        Redshift.ClusterSecurityGroup = ClusterSecurityGroup;
    })(Redshift = AWS.Redshift || (AWS.Redshift = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Redshift;
    (function (Redshift) {
        /**
         * Specifies inbound (ingress) rules for an Amazon Redshift security group.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html
         */
        function ClusterSecurityGroupIngress(props) {
            return Object.assign({ Type: 'AWS::Redshift::ClusterSecurityGroupIngress' }, props);
        }
        Redshift.ClusterSecurityGroupIngress = ClusterSecurityGroupIngress;
    })(Redshift = AWS.Redshift || (AWS.Redshift = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Redshift;
    (function (Redshift) {
        /**
         * Creates an Amazon Redshift subnet group. You must provide a list of one or more subnets
        in your
        existing Amazon VPC when creating an Amazon Redshift subnet group.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html
         */
        function ClusterSubnetGroup(props) {
            return Object.assign({ Type: 'AWS::Redshift::ClusterSubnetGroup' }, props);
        }
        Redshift.ClusterSubnetGroup = ClusterSubnetGroup;
    })(Redshift = AWS.Redshift || (AWS.Redshift = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Route53;
    (function (Route53) {
        /**
         * Use the AWS::Route53::HealthCheck resource to check the health of your
        resources before Amazon Route 53 responds to a DNS query. For more information, see
        How Health Checks Work in Simple Amazon
           Route 53 Configurations in the Amazon Route 53 Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html
         */
        function HealthCheck(props) {
            return Object.assign({ Type: 'AWS::Route53::HealthCheck' }, props);
        }
        Route53.HealthCheck = HealthCheck;
    })(Route53 = AWS.Route53 || (AWS.Route53 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Route53;
    (function (Route53) {
        /**
         * The AWS::Route53::HostedZone resource creates a hosted zone, which can contain
        a collection of record sets for a domain. You cannot create a hosted zone for a top-level
        domain (TLD). For more information, see POST CreateHostedZone or POST CreateHostedZone
           (Private) in the Amazon Route 53 API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html
         */
        function HostedZone(props) {
            return Object.assign({ Type: 'AWS::Route53::HostedZone' }, props);
        }
        Route53.HostedZone = HostedZone;
    })(Route53 = AWS.Route53 || (AWS.Route53 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Route53;
    (function (Route53) {
        /**
         * The AWS::Route53::RecordSet type can be used as a standalone resource or as an
        embedded property in the AWS::Route53::RecordSetGroup type. Note that some
        AWS::Route53::RecordSet properties are valid only when used within
        AWS::Route53::RecordSetGroup.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset.html
         */
        function RecordSet(props) {
            return Object.assign({ Type: 'AWS::Route53::RecordSet' }, props);
        }
        Route53.RecordSet = RecordSet;
    })(Route53 = AWS.Route53 || (AWS.Route53 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var Route53;
    (function (Route53) {
        /**
         * The AWS::Route53::RecordSetGroup resource creates record sets for a hosted zone. For more
        information about constraints and values for each property, see POST
           CreateHostedZone for hosted zones and POST
           ChangeResourceRecordSet for resource record sets.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html
         */
        function RecordSetGroup(props) {
            return Object.assign({ Type: 'AWS::Route53::RecordSetGroup' }, props);
        }
        Route53.RecordSetGroup = RecordSetGroup;
    })(Route53 = AWS.Route53 || (AWS.Route53 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var S3;
    (function (S3) {
        /**
         * The AWS::S3::Bucket resource creates an Amazon Simple Storage Service (Amazon S3) bucket in the same
        AWS
        Region where you create the AWS CloudFormation stack.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html
         */
        function Bucket(props) {
            return Object.assign({ Type: 'AWS::S3::Bucket' }, props);
        }
        S3.Bucket = Bucket;
    })(S3 = AWS.S3 || (AWS.S3 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var S3;
    (function (S3) {
        /**
         * The AWS::S3::BucketPolicy type applies an Amazon S3 bucket policy to an Amazon S3
        bucket.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html
         */
        function BucketPolicy(props) {
            return Object.assign({ Type: 'AWS::S3::BucketPolicy' }, props);
        }
        S3.BucketPolicy = BucketPolicy;
    })(S3 = AWS.S3 || (AWS.S3 = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SDB;
    (function (SDB) {
        /**
         * Use the AWS::SDB::Domain resource to declare an Amazon SimpleDB domain. When you
        specify AWS::SDB::Domain as an argument in a Ref function, AWS CloudFormation
        returns the value of the DomainName.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simpledb.html
         */
        function Domain(props) {
            return Object.assign({ Type: 'AWS::SDB::Domain' }, props);
        }
        SDB.Domain = Domain;
    })(SDB = AWS.SDB || (AWS.SDB = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SES;
    (function (SES) {
        /**
         * The AWS::SES::ConfigurationSet resource lets you create groups of rules
        that you can apply to the emails you send using Amazon SES. For more information about
        using
        configuration sets, see Using Amazon SES
           Configuration Sets in the Amazon Simple Email Service Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html
         */
        function ConfigurationSet(props) {
            return Object.assign({ Type: 'AWS::SES::ConfigurationSet' }, props);
        }
        SES.ConfigurationSet = ConfigurationSet;
    })(SES = AWS.SES || (AWS.SES = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SES;
    (function (SES) {
        /**
         * The AWS::SES::ConfigurationSetEventDestination resource specifies a
        configuration set event destination for Amazon SES. For more information, see CreateConfigurationSetEventDestination in the Amazon Simple Email Service API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html
         */
        function ConfigurationSetEventDestination(props) {
            return Object.assign({ Type: 'AWS::SES::ConfigurationSetEventDestination' }, props);
        }
        SES.ConfigurationSetEventDestination = ConfigurationSetEventDestination;
    })(SES = AWS.SES || (AWS.SES = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SES;
    (function (SES) {
        /**
         * The
        AWS::SES::ReceiptFilter resource whether to accept or reject mail originating from an IP address or range
        of IP addresses for Amazon SES. For more information, see
        Creating IP Address Filters for Amazon SES Email Receiving in the Amazon Simple Email Service Developer Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html
         */
        function ReceiptFilter(props) {
            return Object.assign({ Type: 'AWS::SES::ReceiptFilter' }, props);
        }
        SES.ReceiptFilter = ReceiptFilter;
    })(SES = AWS.SES || (AWS.SES = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SES;
    (function (SES) {
        /**
         * The
        AWS::SES::ReceiptRule resource specifies which actions Amazon SES should take when it receives mail on
        behalf of one or more email addresses or domains that you own. For more information,
        see Creating Receipt Rules for Amazon SES Email Receiving in the Amazon Simple Email Service Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html
         */
        function ReceiptRule(props) {
            return Object.assign({ Type: 'AWS::SES::ReceiptRule' }, props);
        }
        SES.ReceiptRule = ReceiptRule;
    })(SES = AWS.SES || (AWS.SES = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SES;
    (function (SES) {
        /**
         * The AWS::SES::ReceiptRuleSet resource specifies an empty rule set for
        Amazon SES. For more information, see CreateReceiptRuleSet in the Amazon Simple Email Service API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html
         */
        function ReceiptRuleSet(props) {
            return Object.assign({ Type: 'AWS::SES::ReceiptRuleSet' }, props);
        }
        SES.ReceiptRuleSet = ReceiptRuleSet;
    })(SES = AWS.SES || (AWS.SES = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SES;
    (function (SES) {
        /**
         * The
        AWS::SES::Template resource specifies the content of an email (composed of a subject line, an HTML part,
        and a text-only part) for Amazon SES. For more information, see Template in the Amazon Simple Email Service API Reference.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html
         */
        function Template(props) {
            return Object.assign({ Type: 'AWS::SES::Template' }, props);
        }
        SES.Template = Template;
    })(SES = AWS.SES || (AWS.SES = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SNS;
    (function (SNS) {
        /**
         * The AWS::SNS::Subscription resource subscribes an endpoint to an Amazon Simple Notification Service
        (Amazon SNS) topic. The owner of the endpoint must confirm the subscription before
        Amazon SNS creates
        the subscription.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html
         */
        function Subscription(props) {
            return Object.assign({ Type: 'AWS::SNS::Subscription' }, props);
        }
        SNS.Subscription = Subscription;
    })(SNS = AWS.SNS || (AWS.SNS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SNS;
    (function (SNS) {
        /**
         * The AWS::SNS::Topic type creates an Amazon Simple Notification Service (Amazon SNS) topic.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic.html
         */
        function Topic(props) {
            return Object.assign({ Type: 'AWS::SNS::Topic' }, props);
        }
        SNS.Topic = Topic;
    })(SNS = AWS.SNS || (AWS.SNS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SNS;
    (function (SNS) {
        /**
         * The AWS::SNS::TopicPolicy resource associates Amazon SNS topics with a
        policy.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html
         */
        function TopicPolicy(props) {
            return Object.assign({ Type: 'AWS::SNS::TopicPolicy' }, props);
        }
        SNS.TopicPolicy = TopicPolicy;
    })(SNS = AWS.SNS || (AWS.SNS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SQS;
    (function (SQS) {
        /**
         * The AWS::SQS::Queue resource creates an Amazon Simple Queue Service (Amazon SQS) queue.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-queues.html
         */
        function Queue(props) {
            return Object.assign({ Type: 'AWS::SQS::Queue' }, props);
        }
        SQS.Queue = Queue;
    })(SQS = AWS.SQS || (AWS.SQS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SQS;
    (function (SQS) {
        /**
         * The AWS::SQS::QueuePolicy type applies a policy to Amazon SQS queues.
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html
         */
        function QueuePolicy(props) {
            return Object.assign({ Type: 'AWS::SQS::QueuePolicy' }, props);
        }
        SQS.QueuePolicy = QueuePolicy;
    })(SQS = AWS.SQS || (AWS.SQS = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SSM;
    (function (SSM) {
        /**
         * The AWS::SSM::Association resource associates an SSM document in AWS Systems Manager with
        EC2 instances that contain a configuration agent to process the document.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html
         */
        function Association(props) {
            return Object.assign({ Type: 'AWS::SSM::Association' }, props);
        }
        SSM.Association = Association;
    })(SSM = AWS.SSM || (AWS.SSM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SSM;
    (function (SSM) {
        /**
         * The AWS::SSM::Document resource creates an SSM document in AWS Systems Manager that
        describes an instance configuration, which you can use to set up and run commands
        on your
        instances.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html
         */
        function Document(props) {
            return Object.assign({ Type: 'AWS::SSM::Document' }, props);
        }
        SSM.Document = Document;
    })(SSM = AWS.SSM || (AWS.SSM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SSM;
    (function (SSM) {
        /**
         * The AWS::SSM::MaintenanceWindowTask resource defines information about a task
        for a Maintenance Window for AWS Systems Manager. For more information, see  RegisterTaskWithMaintenanceWindow in the AWS Systems Manager API
           Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html
         */
        function MaintenanceWindowTask(props) {
            return Object.assign({ Type: 'AWS::SSM::MaintenanceWindowTask' }, props);
        }
        SSM.MaintenanceWindowTask = MaintenanceWindowTask;
    })(SSM = AWS.SSM || (AWS.SSM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SSM;
    (function (SSM) {
        /**
         * The AWS::SSM::Parameter resource creates an SSM parameter in AWS Systems Manager
        Parameter Store.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html
         */
        function Parameter(props) {
            return Object.assign({ Type: 'AWS::SSM::Parameter' }, props);
        }
        SSM.Parameter = Parameter;
    })(SSM = AWS.SSM || (AWS.SSM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SSM;
    (function (SSM) {
        /**
         * The AWS::SSM::PatchBaseline resource defines the basic information for an
        AWS Systems Manager patch baseline. A patch baseline defines which patches are approved
        for installation
        on your instances. For more information, see
           CreatePatchBaseline in the AWS Systems Manager API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html
         */
        function PatchBaseline(props) {
            return Object.assign({ Type: 'AWS::SSM::PatchBaseline' }, props);
        }
        SSM.PatchBaseline = PatchBaseline;
    })(SSM = AWS.SSM || (AWS.SSM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SSM;
    (function (SSM) {
        /**
         * The AWS::SSM::ResourceDataSync resource creates or deletes a Resource Data Sync
        for Systems Manager Inventory. You can use Resource Data Sync to send Inventory data
        collected from all of
        your Systems Manager managed instances to a single Amazon S3 bucket that you have
        already created in your
        account. Resource Data Sync then automatically updates the centralized data when new
        Inventory
        data is collected. For more information, see Configuring Resource Data Sync for Inventory in the
        AWS Systems Manager User Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html
         */
        function ResourceDataSync(props) {
            return Object.assign({ Type: 'AWS::SSM::ResourceDataSync' }, props);
        }
        SSM.ResourceDataSync = ResourceDataSync;
    })(SSM = AWS.SSM || (AWS.SSM = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SageMaker;
    (function (SageMaker) {
        /**
         * Use the AWS::SageMaker::Endpoint resource to create an endpoint using the specified
        configuration in the request. Amazon SageMaker uses the endpoint to provision resources
        and deploy models.
        You create the endpoint configuration with the AWS::SageMaker::EndpointConfig resource. For more information, see
        Deploying a Model
           on Amazon SageMaker Hosting Services in the SageMaker Developer
           Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html
         */
        function Endpoint(props) {
            return Object.assign({ Type: 'AWS::SageMaker::Endpoint' }, props);
        }
        SageMaker.Endpoint = Endpoint;
    })(SageMaker = AWS.SageMaker || (AWS.SageMaker = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SageMaker;
    (function (SageMaker) {
        /**
         * The
        AWS::SageMaker::EndpointConfig resource creates a configuration for an Amazon
        SageMaker endpoint. For more information, see
        CreateEndpointConfig
        in the
        
        SageMaker Developer Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html
         */
        function EndpointConfig(props) {
            return Object.assign({ Type: 'AWS::SageMaker::EndpointConfig' }, props);
        }
        SageMaker.EndpointConfig = EndpointConfig;
    })(SageMaker = AWS.SageMaker || (AWS.SageMaker = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SageMaker;
    (function (SageMaker) {
        /**
         * The AWS::SageMaker::Model resource to create a model to host at an Amazon
        SageMaker endpoint. For more information, see Deploying a Model on
           Amazon SageMaker Hosting Services in the Amazon SageMaker Developer
           Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html
         */
        function Model(props) {
            return Object.assign({ Type: 'AWS::SageMaker::Model' }, props);
        }
        SageMaker.Model = Model;
    })(SageMaker = AWS.SageMaker || (AWS.SageMaker = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SageMaker;
    (function (SageMaker) {
        /**
         * The AWS::SageMaker::NotebookInstance resource Creates an Amazon SageMaker
        notebook instance. A notebook instance is a machine learning (ML) compute instance
        running
        on a Jupyter notebook. For more information, see Using Notebook Instances in
        the Amazon SageMaker Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html
         */
        function NotebookInstance(props) {
            return Object.assign({ Type: 'AWS::SageMaker::NotebookInstance' }, props);
        }
        SageMaker.NotebookInstance = NotebookInstance;
    })(SageMaker = AWS.SageMaker || (AWS.SageMaker = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var SageMaker;
    (function (SageMaker) {
        /**
         * The
        AWS::SageMaker::NotebookInstanceLifecycleConfig resource specifies shell
        scripts that run when you create and/or start a notebook instance. For more information,
        see
        Customize a
           Notebook Instance in the Amazon SageMaker Developer Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html
         */
        function NotebookInstanceLifecycleConfig(props) {
            return Object.assign({ Type: 'AWS::SageMaker::NotebookInstanceLifecycleConfig' }, props);
        }
        SageMaker.NotebookInstanceLifecycleConfig = NotebookInstanceLifecycleConfig;
    })(SageMaker = AWS.SageMaker || (AWS.SageMaker = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceCatalog;
    (function (ServiceCatalog) {
        /**
         * Accepts an offer to share the specified portfolio for AWS Service Catalog. For more
        information, see
        AcceptPortfolioShare in the AWS Service Catalog Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html
         */
        function AcceptedPortfolioShare(props) {
            return Object.assign({ Type: 'AWS::ServiceCatalog::AcceptedPortfolioShare' }, props);
        }
        ServiceCatalog.AcceptedPortfolioShare = AcceptedPortfolioShare;
    })(ServiceCatalog = AWS.ServiceCatalog || (AWS.ServiceCatalog = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceCatalog;
    (function (ServiceCatalog) {
        /**
         * Creates the specified product for AWS Service Catalog. For more information, see
        CreateProduct in the AWS Service Catalog Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html
         */
        function CloudFormationProduct(props) {
            return Object.assign({ Type: 'AWS::ServiceCatalog::CloudFormationProduct' }, props);
        }
        ServiceCatalog.CloudFormationProduct = CloudFormationProduct;
    })(ServiceCatalog = AWS.ServiceCatalog || (AWS.ServiceCatalog = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceCatalog;
    (function (ServiceCatalog) {
        /**
         * Provisions the specified product for AWS Service Catalog. For more information, see
        ProvisionProduct in the
        AWS Service Catalog Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html
         */
        function CloudFormationProvisionedProduct(props) {
            return Object.assign({ Type: 'AWS::ServiceCatalog::CloudFormationProvisionedProduct' }, props);
        }
        ServiceCatalog.CloudFormationProvisionedProduct = CloudFormationProvisionedProduct;
    })(ServiceCatalog = AWS.ServiceCatalog || (AWS.ServiceCatalog = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceCatalog;
    (function (ServiceCatalog) {
        /**
         * Creates a notification constraint for AWS Service Catalog. For more information, see
        CreateConstraint in the AWS Service Catalog Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html
         */
        function LaunchNotificationConstraint(props) {
            return Object.assign({ Type: 'AWS::ServiceCatalog::LaunchNotificationConstraint' }, props);
        }
        ServiceCatalog.LaunchNotificationConstraint = LaunchNotificationConstraint;
    })(ServiceCatalog = AWS.ServiceCatalog || (AWS.ServiceCatalog = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceCatalog;
    (function (ServiceCatalog) {
        /**
         * Creates a launch constraint for AWS Service Catalog. For more information, see CreateConstraint in the AWS Service Catalog Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html
         */
        function LaunchRoleConstraint(props) {
            return Object.assign({ Type: 'AWS::ServiceCatalog::LaunchRoleConstraint' }, props);
        }
        ServiceCatalog.LaunchRoleConstraint = LaunchRoleConstraint;
    })(ServiceCatalog = AWS.ServiceCatalog || (AWS.ServiceCatalog = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceCatalog;
    (function (ServiceCatalog) {
        /**
         * Creates a template constraint for AWS Service Catalog. For more information, see CreateConstraint in the AWS Service Catalog Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html
         */
        function LaunchTemplateConstraint(props) {
            return Object.assign({ Type: 'AWS::ServiceCatalog::LaunchTemplateConstraint' }, props);
        }
        ServiceCatalog.LaunchTemplateConstraint = LaunchTemplateConstraint;
    })(ServiceCatalog = AWS.ServiceCatalog || (AWS.ServiceCatalog = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceCatalog;
    (function (ServiceCatalog) {
        /**
         * Creates a portfolio for AWS Service Catalog. For more information, see
        CreatePortfolio in the AWS Service Catalog Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html
         */
        function Portfolio(props) {
            return Object.assign({ Type: 'AWS::ServiceCatalog::Portfolio' }, props);
        }
        ServiceCatalog.Portfolio = Portfolio;
    })(ServiceCatalog = AWS.ServiceCatalog || (AWS.ServiceCatalog = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceCatalog;
    (function (ServiceCatalog) {
        /**
         * Associates the specified principal with the specified portfolio for AWS Service Catalog.
        For more information, see
        AssociatePrincipalWithPortfolio
        in the AWS Service Catalog Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html
         */
        function PortfolioPrincipalAssociation(props) {
            return Object.assign({ Type: 'AWS::ServiceCatalog::PortfolioPrincipalAssociation' }, props);
        }
        ServiceCatalog.PortfolioPrincipalAssociation = PortfolioPrincipalAssociation;
    })(ServiceCatalog = AWS.ServiceCatalog || (AWS.ServiceCatalog = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceCatalog;
    (function (ServiceCatalog) {
        /**
         * Associates the specified product with the specified portfolio for AWS Service Catalog.
        For more information, see
        AssociateProductWithPortfolio
        in the AWS Service Catalog Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html
         */
        function PortfolioProductAssociation(props) {
            return Object.assign({ Type: 'AWS::ServiceCatalog::PortfolioProductAssociation' }, props);
        }
        ServiceCatalog.PortfolioProductAssociation = PortfolioProductAssociation;
    })(ServiceCatalog = AWS.ServiceCatalog || (AWS.ServiceCatalog = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceCatalog;
    (function (ServiceCatalog) {
        /**
         * Shares the specified portfolio for AWS Service Catalog with the specified account.
        For more information, see
        CreatePortfolioShare in the AWS Service Catalog Developer Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html
         */
        function PortfolioShare(props) {
            return Object.assign({ Type: 'AWS::ServiceCatalog::PortfolioShare' }, props);
        }
        ServiceCatalog.PortfolioShare = PortfolioShare;
    })(ServiceCatalog = AWS.ServiceCatalog || (AWS.ServiceCatalog = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceCatalog;
    (function (ServiceCatalog) {
        /**
         * A TagOption is a key-value pair managed by AWS Service Catalog that serves as a template
        for creating an AWS tag. For more information,
        see AWS Service Catalog TagOptionLibrary in the AWS Service Catalog Administrator Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html
         */
        function TagOption(props) {
            return Object.assign({ Type: 'AWS::ServiceCatalog::TagOption' }, props);
        }
        ServiceCatalog.TagOption = TagOption;
    })(ServiceCatalog = AWS.ServiceCatalog || (AWS.ServiceCatalog = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceCatalog;
    (function (ServiceCatalog) {
        /**
         * Associates the specified TagOption with the specified AWS Service Catalog resource.
        For more information, see
        AWS Service Catalog TagOptionLibrary in the AWS Service Catalog Administrator Guide.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html
         */
        function TagOptionAssociation(props) {
            return Object.assign({ Type: 'AWS::ServiceCatalog::TagOptionAssociation' }, props);
        }
        ServiceCatalog.TagOptionAssociation = TagOptionAssociation;
    })(ServiceCatalog = AWS.ServiceCatalog || (AWS.ServiceCatalog = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceDiscovery;
    (function (ServiceDiscovery) {
        /**
         * The AWS::ServiceDiscovery::Instance resource specifies information about an instance that
                Amazon Route 53 creates. For more information, see
                Instance in the Amazon Route 53 API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html
         */
        function Instance(props) {
            return Object.assign({ Type: 'AWS::ServiceDiscovery::Instance' }, props);
        }
        ServiceDiscovery.Instance = Instance;
    })(ServiceDiscovery = AWS.ServiceDiscovery || (AWS.ServiceDiscovery = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceDiscovery;
    (function (ServiceDiscovery) {
        /**
         * The AWS::ServiceDiscovery::PrivateDnsNamespace resource specifies information about
                a private namespace for Amazon Route 53. Use a private namespace when you want to
        route traffic inside an Amazon VPC.
                For more information, see CreatePrivateDnsNamespace
                in the Amazon Route 53 API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-privatednsnamespace.html
         */
        function PrivateDnsNamespace(props) {
            return Object.assign({ Type: 'AWS::ServiceDiscovery::PrivateDnsNamespace' }, props);
        }
        ServiceDiscovery.PrivateDnsNamespace = PrivateDnsNamespace;
    })(ServiceDiscovery = AWS.ServiceDiscovery || (AWS.ServiceDiscovery = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceDiscovery;
    (function (ServiceDiscovery) {
        /**
         * The AWS::ServiceDiscovery::PublicDnsNamespace resource specifies information about
                a public namespace for Amazon Route 53. Use a public namespace when you want to
        route internet traffic to your resources.
                For more information, see CreatePublicDnsNamespace
                in the Amazon Route 53 API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html
         */
        function PublicDnsNamespace(props) {
            return Object.assign({ Type: 'AWS::ServiceDiscovery::PublicDnsNamespace' }, props);
        }
        ServiceDiscovery.PublicDnsNamespace = PublicDnsNamespace;
    })(ServiceDiscovery = AWS.ServiceDiscovery || (AWS.ServiceDiscovery = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var ServiceDiscovery;
    (function (ServiceDiscovery) {
        /**
         * The AWS::ServiceDiscovery::Service resource defines a template for up to five records and an
                optional health check that you want Amazon Route 53 to create when you register
        an instance. For more information, see
                CreateService
                in the Amazon Route 53 API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html
         */
        function Service(props) {
            return Object.assign({ Type: 'AWS::ServiceDiscovery::Service' }, props);
        }
        ServiceDiscovery.Service = Service;
    })(ServiceDiscovery = AWS.ServiceDiscovery || (AWS.ServiceDiscovery = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var StepFunctions;
    (function (StepFunctions) {
        /**
         * Use the AWS::StepFunctions::Activity resource to create an AWS Step Functions
        activity.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html
         */
        function Activity(props) {
            return Object.assign({ Type: 'AWS::StepFunctions::Activity' }, props);
        }
        StepFunctions.Activity = Activity;
    })(StepFunctions = AWS.StepFunctions || (AWS.StepFunctions = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var StepFunctions;
    (function (StepFunctions) {
        /**
         * Use the AWS::StepFunctions::StateMachine resource to create an AWS Step Functions state
        machine.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html
         */
        function StateMachine(props) {
            return Object.assign({ Type: 'AWS::StepFunctions::StateMachine' }, props);
        }
        StepFunctions.StateMachine = StateMachine;
    })(StepFunctions = AWS.StepFunctions || (AWS.StepFunctions = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAF;
    (function (WAF) {
        /**
         * The AWS::WAF::ByteMatchSet resource creates an AWS WAF
        ByteMatchSet that identifies a part of a web request that you want to inspect.
        For more information, see CreateByteMatchSet in the AWS WAF API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html
         */
        function ByteMatchSet(props) {
            return Object.assign({ Type: 'AWS::WAF::ByteMatchSet' }, props);
        }
        WAF.ByteMatchSet = ByteMatchSet;
    })(WAF = AWS.WAF || (AWS.WAF = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAF;
    (function (WAF) {
        /**
         * The AWS::WAF::IPSet resource creates an AWS WAF IPSet that
        specifies which web requests to permit or block based on the IP addresses from which
        the
        requests originate. For more information, see CreateIPSet in the AWS WAF API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html
         */
        function IPSet(props) {
            return Object.assign({ Type: 'AWS::WAF::IPSet' }, props);
        }
        WAF.IPSet = IPSet;
    })(WAF = AWS.WAF || (AWS.WAF = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAF;
    (function (WAF) {
        /**
         * The AWS::WAF::Rule resource creates an AWS WAF rule that specifies a
        combination of IPSet, ByteMatchSet, and
        SqlInjectionMatchSet objects that identify the web requests to allow, block, or
        count. To implement rules, you must associate them with a web ACL.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html
         */
        function Rule(props) {
            return Object.assign({ Type: 'AWS::WAF::Rule' }, props);
        }
        WAF.Rule = Rule;
    })(WAF = AWS.WAF || (AWS.WAF = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAF;
    (function (WAF) {
        /**
         * The AWS::WAF::SizeConstraintSet resource specifies a size constraint that AWS WAF uses to check the size of a web
        request and which parts of the request to check. For more information, see CreateSizeConstraintSet in the AWS WAF API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html
         */
        function SizeConstraintSet(props) {
            return Object.assign({ Type: 'AWS::WAF::SizeConstraintSet' }, props);
        }
        WAF.SizeConstraintSet = SizeConstraintSet;
    })(WAF = AWS.WAF || (AWS.WAF = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAF;
    (function (WAF) {
        /**
         * The AWS::WAF::SqlInjectionMatchSet resource creates an AWS WAF
        SqlInjectionMatchSet, which you use to allow, block, or count requests that
        contain malicious SQL code in a specific part of web requests. For more information,
        see CreateSqlInjectionMatchSet in
        the AWS WAF API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sqlinjectionmatchset.html
         */
        function SqlInjectionMatchSet(props) {
            return Object.assign({ Type: 'AWS::WAF::SqlInjectionMatchSet' }, props);
        }
        WAF.SqlInjectionMatchSet = SqlInjectionMatchSet;
    })(WAF = AWS.WAF || (AWS.WAF = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAF;
    (function (WAF) {
        /**
         * The AWS::WAF::WebACL resource creates an AWS WAF web access control group
        (ACL) containing the rules that identify the Amazon CloudFront (CloudFront) web requests
        that you want to
        allow, block, or count. For more information, see CreateWebACL in the
        AWS WAF API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html
         */
        function WebACL(props) {
            return Object.assign({ Type: 'AWS::WAF::WebACL' }, props);
        }
        WAF.WebACL = WebACL;
    })(WAF = AWS.WAF || (AWS.WAF = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAF;
    (function (WAF) {
        /**
         * The AWS::WAF::XssMatchSet resource specifies the parts of web requests that you want AWS WAF to inspect for
        cross-site scripting attacks and the name of the header to inspect. For more information,
        see XssMatchSet in the AWS WAF API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html
         */
        function XssMatchSet(props) {
            return Object.assign({ Type: 'AWS::WAF::XssMatchSet' }, props);
        }
        WAF.XssMatchSet = XssMatchSet;
    })(WAF = AWS.WAF || (AWS.WAF = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAFRegional;
    (function (WAFRegional) {
        /**
         * The AWS::WAFRegional::ByteMatchSet resource creates an AWS WAF Regional
        ByteMatchSet that identifies a part of a web request that you want to inspect.
        For more information, see CreateByteMatchSet in the AWS WAF Regional API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-bytematchset.html
         */
        function ByteMatchSet(props) {
            return Object.assign({ Type: 'AWS::WAFRegional::ByteMatchSet' }, props);
        }
        WAFRegional.ByteMatchSet = ByteMatchSet;
    })(WAFRegional = AWS.WAFRegional || (AWS.WAFRegional = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAFRegional;
    (function (WAFRegional) {
        /**
         * The AWS::WAFRegional::IPSet resource creates an AWS WAF Regional IPSet that
        specifies which web requests to permit or block based on the IP addresses from which
        the
        requests originate. For more information, see CreateIPSet in the AWS WAF Regional API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html
         */
        function IPSet(props) {
            return Object.assign({ Type: 'AWS::WAFRegional::IPSet' }, props);
        }
        WAFRegional.IPSet = IPSet;
    })(WAFRegional = AWS.WAFRegional || (AWS.WAFRegional = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAFRegional;
    (function (WAFRegional) {
        /**
         * The AWS::WAFRegional::Rule resource creates an AWS WAF Regional rule that specifies a
        combination of IPSet, ByteMatchSet, and
        SqlInjectionMatchSet objects that identify the web requests to allow, block, or
        count. To implement rules, you must associate them with a web ACL.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-rule.html
         */
        function Rule(props) {
            return Object.assign({ Type: 'AWS::WAFRegional::Rule' }, props);
        }
        WAFRegional.Rule = Rule;
    })(WAFRegional = AWS.WAFRegional || (AWS.WAFRegional = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAFRegional;
    (function (WAFRegional) {
        /**
         * The AWS::WAFRegional::SizeConstraintSet resource specifies a size constraint that AWS WAF uses to check the size of a web
        request and which parts of the request to check. For more information, see CreateSizeConstraintSet in the AWS WAF Regional API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-sizeconstraintset.html
         */
        function SizeConstraintSet(props) {
            return Object.assign({ Type: 'AWS::WAFRegional::SizeConstraintSet' }, props);
        }
        WAFRegional.SizeConstraintSet = SizeConstraintSet;
    })(WAFRegional = AWS.WAFRegional || (AWS.WAFRegional = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAFRegional;
    (function (WAFRegional) {
        /**
         * The AWS::WAFRegional::SqlInjectionMatchSet resource creates an AWS WAF Regional
        SqlInjectionMatchSet, which you use to allow, block, or count requests that
        contain malicious SQL code in a specific part of web requests. For more information,
        see CreateSqlInjectionMatchSet in
        the AWS WAF Regional API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-sqlinjectionmatchset.html
         */
        function SqlInjectionMatchSet(props) {
            return Object.assign({ Type: 'AWS::WAFRegional::SqlInjectionMatchSet' }, props);
        }
        WAFRegional.SqlInjectionMatchSet = SqlInjectionMatchSet;
    })(WAFRegional = AWS.WAFRegional || (AWS.WAFRegional = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAFRegional;
    (function (WAFRegional) {
        /**
         * The AWS::WAFRegional::WebACL resource creates an AWS WAF Regional web access control group
        (ACL) containing the rules that identify the Amazon CloudFront (CloudFront) web requests
        that you want to
        allow, block, or count. For more information, see CreateWebACL in the
        AWS WAF Regional API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html
         */
        function WebACL(props) {
            return Object.assign({ Type: 'AWS::WAFRegional::WebACL' }, props);
        }
        WAFRegional.WebACL = WebACL;
    })(WAFRegional = AWS.WAFRegional || (AWS.WAFRegional = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAFRegional;
    (function (WAFRegional) {
        /**
         * The AWS::WAFRegional::WebACLAssociation resource associates an AWS WAF Regional web access control group
        (ACL) with a resource. For more information, see AssociateWebACL in the
        AWS WAF Regional API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webaclassociation.html
         */
        function WebACLAssociation(props) {
            return Object.assign({ Type: 'AWS::WAFRegional::WebACLAssociation' }, props);
        }
        WAFRegional.WebACLAssociation = WebACLAssociation;
    })(WAFRegional = AWS.WAFRegional || (AWS.WAFRegional = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WAFRegional;
    (function (WAFRegional) {
        /**
         * The AWS::WAFRegional::XssMatchSet resource specifies the parts of web requests that you want AWS WAF to inspect for
        cross-site scripting attacks and the name of the header to inspect. For more information,
        see XssMatchSet in the AWS WAF Regional API Reference.
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-xssmatchset.html
         */
        function XssMatchSet(props) {
            return Object.assign({ Type: 'AWS::WAFRegional::XssMatchSet' }, props);
        }
        WAFRegional.XssMatchSet = XssMatchSet;
    })(WAFRegional = AWS.WAFRegional || (AWS.WAFRegional = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
(function (AWS) {
    var WorkSpaces;
    (function (WorkSpaces) {
        /**
         * The AWS::WorkSpaces::Workspace resource creates an Amazon WorkSpaces workspace, which is a
        cloud-based desktop experience for end users. Before creating a Workspace
        in CloudFormation, you must register a Directory Service directory with
        Workspaces. This process is documented at Register a Directory with Amazon WorkSpaces. For more information, see the Amazon WorkSpaces Administration Guide.
        
     
         *
         * Documentation: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html
         */
        function Workspace(props) {
            return Object.assign({ Type: 'AWS::WorkSpaces::Workspace' }, props);
        }
        WorkSpaces.Workspace = Workspace;
    })(WorkSpaces = AWS.WorkSpaces || (AWS.WorkSpaces = {}));
})(AWS = exports.AWS || (exports.AWS = {}));
//# sourceMappingURL=cloudformation-types.js.map